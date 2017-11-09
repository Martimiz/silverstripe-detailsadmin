<?php
/**
 * icon reference:
 * file:///SILVERSTRIPE/sites/netbeans4/www/vendor/silverstripe/admin/client/src/font/icons-reference.html
 */

namespace Martimiz\DetailsAdmin;

use LogicException;
use SilverStripe\Admin\LeftAndMain;
use SilverStripe\Admin\LeftAndMainFormRequestHandler;
use SilverStripe\Control\Controller;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\Form;
use SilverStripe\Forms\FormAction;
use SilverStripe\Forms\HiddenField;
use SilverStripe\Forms\RequiredFields;
use SilverStripe\ORM\ValidationResult;
use SilverStripe\Core\Config\Config;
use SilverStripe\View\Requirements;
use SilverStripe\Security\PermissionProvider;

abstract class DetailsAdmin extends LeftAndMain
{
    private static $url_segment = 'detailsadmin';
    private static $menu_title = 'Details';
    private static $menu_icon_class = 'font-icon-cog';
    private static $menu_priority = 120;
    private static $tree_class;

    private static $allowed_actions = [
        'detailsEditForm'
    ];

    private static $url_handlers = [
        'detailsEditForm/$ID' => 'detailsEditForm'
    ];

    protected $treeClass;

    protected function init()
    {
        parent::init();
        $this->treeClass = Config::inst()->get(get_class($this), 'tree_class');

        Requirements::customScript('window.ss.detailsadmin = "' . get_class($this) . '"' );
    }

    public function getClientConfig()
    {
        $treeClass = Config::inst()->get(get_class($this), 'tree_class');
        $name = $treeClass::singleton()->i18n_singular_name();

        return array_merge(parent::getClientConfig(), [
            'reactRouter' => true,
            'detailsAdmin' => true,
            'treeClassTitle' => $name,
            'form' => [
                'detailsEditForm' => [
                    'schemaUrl' => $this->Link('schema/detailsEditForm')
                ],
            ],
        ]);
    }

    // this is used when the form is posted, but not when the form is first created
    public function detailsEditForm($request)
    {
        // Get ID either from posted back value, or url parameter
        if (!$request) {
            $this->httpError(400);
            return null;
        }
        $id = $request->param('ID');
        if (!$id) {
            $this->httpError(400);
            return null;
        }
        return $this->getDetailsEditForm($id);
    }

    public function getDetailsEditForm($id=1)
    {
        // Get record-specific fields
        $record = $this->treeClass::get()->first();

        if (!$record) {
            $record = $this->treeClass::singleton();
            $record->write();
        }

        if (!$record) {
            $this->httpError(404);
            return null;
        }
        if (!$record->canView()) {
            $this->httpError(403);
            return null;
        }

        $fields = $record->getCMSFields();

        // Add standard fields
        $fields->push(HiddenField::create('ID'));
        $form = Form::create(
            $this,
            'detailsEditForm',
            $fields,
            FieldList::create(
                FormAction::create('save', _t(__CLASS__.'SAVE', 'Save'))
                    ->setIcon('save')
                    ->setSchemaState([
                        'data' => [
                            'pristineTitle' => _t(__CLASS__.'SAVED', 'Saved'),
                            'pristineIcon' => 'tick',
                            'dirtyTitle' => _t(__CLASS__.'SAVE', 'Save'),
                            'dirtyIcon' => 'save',
                            'pristineClass' => 'btn-outline-primary',
                            'dirtyClass' => '',
                        ],
                    ])
            ),
            new RequiredFields('Title')
        );

        // Load into form
        $form->loadDataFrom($record);

        // Set form action handler with ID included
        $form->setRequestHandler(
            LeftAndMainFormRequestHandler::create($form, [ $id ])
        );

        // Configure form to respond to validation errors with form schema
        // if requested via react.
        $form->setValidationResponseCallback(function (ValidationResult $errors) use ($form, $id, $record) {
            $schemaId = Controller::join_links(
                $this->Link('schema'),
                'detailsEditForm',
                $id
            );
            return $this->getSchemaResponse($schemaId, $form, $errors);
        });

        $form->setNotifyUnsavedChanges(true);

        return $form;
    }


    /**
     * Save  handler
     *
     * @param array $data
     * @param Form $form
     * @return HTTPResponse
     */
    public function save($data, $form)
    {
        $errors = null;

        // Existing or new record?
        $id = empty($data['ID']) ? 0 : $data['ID'];
        if ($id) {
            $record = $this->treeClass::get()->byID($id);
            if ($record && !$record->canEdit()) {
                return Security::permissionFailure($this);
            }
            if (!$record || !$record->ID) {
                $this->httpError(404, "Bad record ID #" . (int)$id);
            }
        } else {
            if (!$this->treeClass::singleton()->canCreate()) {
                return Security::permissionFailure($this);
            }
            $record = $this->treeClass::create();
        }

        // save form data into record
        $form->saveInto($record, true);
        $record->write();
        $this->extend('onAfterSave', $record);
        $message = _t(__CLASS__.'.SAVEDUP', 'Saved.');
        $form->setMessage($message, ValidationResult::TYPE_GOOD);


        $schemaId = Controller::join_links($this->Link('schema'), 'detailsEditForm', $id);

        // Ensure that newly created records have all their data loaded back into the form.
        $form->loadDataFrom($record);
        $extra = ['record' => ['id' => $record->ID]];
        $response = $this->getSchemaResponse($schemaId, $form, $errors, $extra);
        $response->addHeader('X-Status', rawurlencode($message));
        return $response;
    }

}

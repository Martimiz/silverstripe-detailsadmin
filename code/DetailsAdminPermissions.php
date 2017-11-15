<?php

/**
 * DetailsAdminPermissions.php
 *
 * As DetailsAdmin  - just like ModelAdmin - is a static classit can't
 * implement PermissionProvider itself, as it can't be instanciated.
 * For ModelAdmin, LeftAndMain::providePermissions() handles that task, but we can't
 * use that, hence this little helper class.
 *
 * @package Martimiz\DetailsAdmin
 * @author Martine Bloem <martimiz@gmail.com>
 * @copyright 2017-2018 Balbus Design
 *
 */

namespace Martimiz\DetailsAdmin;

use SilverStripe\Security\PermissionProvider;
use SilverStripe\Core\ClassInfo;
use SilverStripe\Admin\LeftAndMain;

class DetailsAdminPermissions implements PermissionProvider
{

    public function providePermissions()
    {
        $perms = array();

        // Add any custom DetailsAdmin subclasses. Can't put this on DetailsAdmin itself
        // since its marked abstract, and needs to be singleton instanciated.
        foreach (ClassInfo::subclassesFor('Martimiz\\DetailsAdmin\\DetailsAdmin') as $i => $class) {
            if ($class == 'Martimiz\\DetailsAdmin\\DetailsAdmin') {
                continue;
            }

            // Check if DetailsAdmin has explicit required_permission_codes option.
            // If a DetailsAdmin is namespaced you can apply this config to override
            // the default permission generation based on fully qualified class name.
            $code = $class::getRequiredPermissions();

            if (!$code) {
                continue;
            }

            // Get first permission if multiple specified
            if (is_array($code)) {
                $code = reset($code);
            }
            $title = LeftAndMain::menu_title($class);

            $perms[$code] = array(
                'name' => _t(
                    'SilverStripe\\CMS\\Controllers\\CMSMain.ACCESS',
                    "Access to '{title}' section",
                    "Item in permission selection identifying the admin section. Example: Access to 'Files & Images'",
                    array('title' => $title)
                ),
                'category' => _t('SilverStripe\\Security\\Permission.CMS_ACCESS_CATEGORY', 'CMS Access')
            );
        }

        return $perms;
    }

}

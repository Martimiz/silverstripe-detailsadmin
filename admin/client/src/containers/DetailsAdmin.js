import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Toolbar from 'components/Toolbar/Toolbar';
import FormBuilderLoader from 'containers/FormBuilderLoader/FormBuilderLoader';

const DetailsAdmin = props => (
  <div className="fill-height">
    <Toolbar>
      <h2>{props.sectionConfig.treeClassTitle}</h2>
    </Toolbar>
    <div className="panel panel--padded panel--scrollable flexbox-area-grow">
      <FormBuilderLoader
        schemaUrl={props.sectionConfig.form.detailsEditForm.schemaUrl}
      />
    </div>
  </div>
);

DetailsAdmin.propTypes = {
  sectionConfig: PropTypes.object,
};

DetailsAdmin.defaultProps = {
  sectionConfig: {},
};

function mapDispatchToProps() {
  return {};
}

function mapStateToProps(state) {
  const sectionName = state.config.currentDetailsAdmin;
  const sectionConfig = state.config.sections.find((section) => (
      section.name === sectionName
  ));

  return {
    sectionConfig,
  };
}

export { DetailsAdmin as Component };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsAdmin));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Toolbar from 'components/Toolbar/Toolbar';
import FormBuilderLoader from 'containers/FormBuilderLoader/FormBuilderLoader';

let schemaUrl = '';
let treeClassTitle = '';

class DetailsAdmin extends Component {
  componentWillMount() {
    const sectionName = window.ss.detailsadmin;
    const currentSection = this.props.sectionConfig.find((section) => (
      section.name === sectionName
    ));
    schemaUrl = currentSection.form.detailsEditForm.schemaUrl;
    treeClassTitle = currentSection.treeClassTitle;
  }

  render() {
    return (
      <div className="fill-height">
        <Toolbar>
          <h2>{treeClassTitle}</h2>
        </Toolbar>
        <div className="panel panel--padded panel--scrollable flexbox-area-grow">
          <FormBuilderLoader
            schemaUrl={schemaUrl}
          />
        </div>
      </div>
    );
   }
}

DetailsAdmin.defaultProps = {
  sectionConfig: {},
  params: {},
};

function mapDispatchToProps() {
  return {};
}

function mapStateToProps(state) {
  const sectionConfig = state.config.sections;
  return {
    sectionConfig,
  };
}

export { DetailsAdmin as Component };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsAdmin));

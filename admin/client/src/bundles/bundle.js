import { withRouter } from 'react-router';
import reactRouteRegister from 'lib/ReactRouteRegister';
import ConfigHelpers from 'lib/Config';

import DetailsAdmin from '../containers/DetailsAdmin';

document.addEventListener('DOMContentLoaded', () => {
  const sectionName = ConfigHelpers.get('currentDetailsAdmin');
  const sectionConfig = ConfigHelpers.get('sections').find((section) => (
      section.name === sectionName
  ));
  reactRouteRegister.add({
    path: sectionConfig.url,
    component: withRouter(DetailsAdmin),
  });
});

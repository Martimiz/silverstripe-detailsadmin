import { withRouter } from 'react-router';
import reactRouteRegister from 'lib/ReactRouteRegister';
import ConfigHelpers from 'lib/Config';

import DetailsAdmin from '../containers/DetailsAdmin';

document.addEventListener('DOMContentLoaded', () => {
    const sectionConfig = ConfigHelpers.get('sections');

    for (let i = 0; i < sectionConfig.length; i++) {
        const section = sectionConfig[i];

        if ('detailsAdmin' in section) {
            reactRouteRegister.add({
                path: section.url,
                component: withRouter(DetailsAdmin),
            });
        }
    }
});

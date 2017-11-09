import { withRouter } from 'react-router';
import reactRouteRegister from 'lib/ReactRouteRegister';
import ConfigHelpers from 'lib/Config';

import DetailsAdmin from '../containers/DetailsAdmin';

document.addEventListener('DOMContentLoaded', () => {
    const sectionConfig = ConfigHelpers.getAll();

    for (let i = 0; i < sectionConfig.sections.length; i++) {
        const section = sectionConfig.sections[i];

        if ('detailsAdmin' in section) {
            reactRouteRegister.add({
                path: section.url,
                component: withRouter(DetailsAdmin),
            });
        }
    }
});

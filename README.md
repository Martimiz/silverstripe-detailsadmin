# SilverStripe Details Admin

A SilverStripe 4 module that manages a DataObject single record, much in the way of 
the core 'Settings' section. 

**Warning**: The module is built using React, and this means it is work in progress. 
At this point not all SilverStripe components support React, including the GridField.
So getCMSFields will generate an empty tab for has_many relations...


## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Issues](#issues)
- [Contribution](#contribution)
- [Maintainers](#maintainers)
- [License](#license)

<a name="requirements"></a>
## Requirements

- SilverStripe 4.0

<a name="installation"></a>
## Installation


Using `git`, clone the repo to a location of your choice:


`git clone https://github.com/Martimiz/silverstripe-detailsadmin ./my-repo-name`

<a name="usage"></a>
## Usage
In your module create a default DataObject `customSettings`, than create an DetailsAdmin extension like this:

    <?php

    use Martimiz\DetailsAdmin\DetailsAdmin;

    class CustomSettingsAdmin extends DetailsAdmin
    {
        private static $url_segment = 'customsettings';
        private static $menu_title = 'Custom Settings';
        private static $menu_icon_class = 'font-icon-cog';
        private static $menu_priority = 9;
        private static $tree_class = CustomSettings::class;
    }

<a name="issues"></a>
## Issues
All issues can be reported here

`https://github.com/Martimiz/silverstripe-detailsadmin/issues`

<a name="contribution"></a>
## Contribution
Contribution is very welcome in the form of opinions, information, issuereports and pullrequests


<a name="maintainers"></a>
## Maintainers

Martine Bloem aka Martimiz - martine at balbus dot nl

<a name="license"></a>
## License

[BSD-3-Clause](LICENSE.md) &copy; Balbus Design

[silverstripe](https://github.com/silverstripe/silverstripe-framework)
[webpack](https://webpack.js.org)
[issues](https://github.com/Martimiz/silverstripe-detailsadmin/issues)

## Other
[SilverStripe Module Starter Kit](https://github.com/praxisnetau/silverstripe-module-starter) was used for the basic setup of this module. 
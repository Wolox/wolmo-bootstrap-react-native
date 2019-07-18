const { copyFile } = require('../../utils');
const { DRAWER, DRAWER_STYLES, DRAWER_PAGE, DRAWER_PAGE_STYLES } = require('../../files');

const FILES = [DRAWER, DRAWER_STYLES, DRAWER_PAGE, DRAWER_PAGE_STYLES];

module.exports = function drawerFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};

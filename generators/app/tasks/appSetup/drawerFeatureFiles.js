const { copyFile } = require('../../utils');

const DRAWER_PATH = 'src/app/components/Drawer';
const DRAWER_REDUX_PATH = 'src/redux/drawer';
const DRAWER_MENU_PATH = `${DRAWER_PATH}/components/DrawerMenu`;
const DRAWER_OVERLAY_PATH = `${DRAWER_PATH}/components/DrawerOverlay`;

const DRAWER_INDEX = `${DRAWER_PATH}/index.js`;
const DRAWER_MENU_INDEX = `${DRAWER_MENU_PATH}/index.js`;
const DRAWER_MENU_STYLES = `${DRAWER_MENU_PATH}/styles.js`;
const DRAWER_MENU_LAYOUT = `${DRAWER_MENU_PATH}/layout.js`;
const DRAWER_OVERLAY_INDEX = `${DRAWER_OVERLAY_PATH}/index.js`;
const DRAWER_OVERLAY_STYLES = `${DRAWER_OVERLAY_PATH}/styles.js`;
const DRAWER_REDUX_ACTIONS = `${DRAWER_REDUX_PATH}/actions.js`;
const DRAWER_REDUX_REDUCER = `${DRAWER_REDUX_PATH}/reducer.js`;

const FILES = [
  DRAWER_INDEX,
  DRAWER_MENU_INDEX,
  DRAWER_MENU_STYLES,
  DRAWER_MENU_LAYOUT,
  DRAWER_OVERLAY_INDEX,
  DRAWER_OVERLAY_STYLES,
  DRAWER_REDUX_ACTIONS,
  DRAWER_REDUX_REDUCER
];

module.exports = function drawerFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};

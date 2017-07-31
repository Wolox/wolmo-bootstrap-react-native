const DRAWER_FEATURE_PATH = ['src', 'app', 'components', 'Drawer'];
const DRAWER_MENU_FEATURE_PATH = ['src', 'app', 'components', 'Drawer', 'components', 'DrawerMenu'];
const DRAWER_OVERLAY_FEATURE_PATH = ['src', 'app', 'components', 'Drawer', 'components', 'DrawerOverlay'];

module.exports = function drawerFeatureFiles() {
  // src/app/components/Drawer/index.js
  this.fs.copy(
    this.templatePath(...DRAWER_FEATURE_PATH, 'index.js'),
    this.destinationPath(this.projectName, ...DRAWER_FEATURE_PATH, 'index.js')
  );
  // src/app/components/Drawer/components/DrawerMenu/index.js
  this.fs.copy(
    this.templatePath(...DRAWER_MENU_FEATURE_PATH, 'index.js'),
    this.destinationPath(this.projectName, ...DRAWER_MENU_FEATURE_PATH, 'index.js')
  );
  // src/app/components/Drawer/components/DrawerMenu/styles.js
  this.fs.copy(
    this.templatePath(...DRAWER_MENU_FEATURE_PATH, 'styles.js'),
    this.destinationPath(this.projectName, ...DRAWER_MENU_FEATURE_PATH, 'styles.js')
  );
  // src/app/components/Drawer/components/DrawerMenu/layout.js
  this.fs.copy(
    this.templatePath(...DRAWER_MENU_FEATURE_PATH, 'layout.js'),
    this.destinationPath(this.projectName, ...DRAWER_MENU_FEATURE_PATH, 'layout.js')
  );
  // src/app/components/Drawer/components/DrawerOverlay/index.js
  this.fs.copy(
    this.templatePath(...DRAWER_OVERLAY_FEATURE_PATH, 'index.js'),
    this.destinationPath(this.projectName, ...DRAWER_OVERLAY_FEATURE_PATH, 'index.js')
  );
  // src/app/components/Drawer/components/DrawerOverlay/styles.js
  this.fs.copy(
    this.templatePath(...DRAWER_OVERLAY_FEATURE_PATH, 'styles.js'),
    this.destinationPath(this.projectName, ...DRAWER_OVERLAY_FEATURE_PATH, 'styles.js')
  );
  // src/redux/drawer/actions.js
  this.fs.copy(
    this.templatePath('src', 'redux', 'drawer', 'actions.js'),
    this.destinationPath(this.projectName, 'src', 'redux', 'drawer', 'actions.js')
  );
  // src/redux/drawer/reducer.js
  this.fs.copy(
    this.templatePath('src', 'redux', 'drawer', 'reducer.js'),
    this.destinationPath(this.projectName, 'src', 'redux', 'drawer', 'reducer.js')
  );
};

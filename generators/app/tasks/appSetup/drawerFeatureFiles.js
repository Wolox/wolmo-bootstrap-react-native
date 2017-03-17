module.exports = function drawerFeatureFiles() {
  // src/components/Drawer/DrawerContainer.js
  this.fs.copy(
    this.templatePath('src', 'components', 'Drawer', 'DrawerContainer.js'),
    this.destinationPath(this.projectName, 'src', 'components', 'Drawer', 'DrawerContainer.js')
  );
  // src/components/Drawer/DrawerMenu.js
  this.fs.copy(
    this.templatePath('src', 'components', 'Drawer', 'DrawerMenu.js'),
    this.destinationPath(this.projectName, 'src', 'components', 'Drawer', 'DrawerMenu.js')
  );
  // src/components/Drawer/DrawerMenu.styles.js
  this.fs.copy(
    this.templatePath('src', 'components', 'Drawer', 'DrawerMenu.styles.js'),
    this.destinationPath(this.projectName, 'src', 'components', 'Drawer', 'DrawerMenu.styles.js')
  );
  // src/components/Drawer/DrawerMenuContainer.js
  this.fs.copy(
    this.templatePath('src', 'components', 'Drawer', 'DrawerMenuContainer.js'),
    this.destinationPath(this.projectName, 'src', 'components', 'Drawer', 'DrawerMenuContainer.js')
  );
  // src/components/Drawer/DrawerOverlay.js
  this.fs.copy(
    this.templatePath('src', 'components', 'Drawer', 'DrawerOverlay.js'),
    this.destinationPath(this.projectName, 'src', 'components', 'Drawer', 'DrawerOverlay.js')
  );
  // src/components/Drawer/DrawerOverlay.styles.js
  this.fs.copy(
    this.templatePath('src', 'components', 'Drawer', 'DrawerOverlay.styles.js'),
    this.destinationPath(this.projectName, 'src', 'components', 'Drawer', 'DrawerOverlay.styles.js')
  );
  // src/redux/drawerHandlers.js
  this.fs.copy(
    this.templatePath('src', 'redux', 'drawerHandlers.js'),
    this.destinationPath(this.projectName, 'src', 'redux', 'drawerHandlers.js')
  );
};

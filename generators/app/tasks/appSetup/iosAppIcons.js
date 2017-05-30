module.exports = function iosAppIcons() {
  this.fs.copy(
    this.templatePath('iosIcons', 'Contents.json'),
    this.destinationPath(
      this.projectName,
      'ios',
      this.projectName,
      'Images.xcassets',
      'AppIcon.appiconset',
      'Contents.json'
    )
  );

  this.fs.copy(
    this.templatePath('iosIcons', 'Icon-29@2x.png'),
    this.destinationPath(
      this.projectName,
      'ios',
      this.projectName,
      'Images.xcassets',
      'AppIcon.appiconset',
      'Icon-29@2x.png'
    )
  );

  this.fs.copy(
    this.templatePath('iosIcons', 'Icon-29@3x.png'),
    this.destinationPath(
      this.projectName,
      'ios',
      this.projectName,
      'Images.xcassets',
      'AppIcon.appiconset',
      'Icon-29@3x.png'
    )
  );

  this.fs.copy(
    this.templatePath('iosIcons', 'Icon-40.png'),
    this.destinationPath(
      this.projectName,
      'ios',
      this.projectName,
      'Images.xcassets',
      'AppIcon.appiconset',
      'Icon-40.png'
    )
  );

  this.fs.copy(
    this.templatePath('iosIcons', 'Icon-40@2x.png'),
    this.destinationPath(
      this.projectName,
      'ios',
      this.projectName,
      'Images.xcassets',
      'AppIcon.appiconset',
      'Icon-40@2x.png'
    )
  );

  this.fs.copy(
    this.templatePath('iosIcons', 'Icon-40@3x.png'),
    this.destinationPath(
      this.projectName,
      'ios',
      this.projectName,
      'Images.xcassets',
      'AppIcon.appiconset',
      'Icon-40@3x.png'
    )
  );

  this.fs.copy(
    this.templatePath('iosIcons', 'Icon-60.png'),
    this.destinationPath(
      this.projectName,
      'ios',
      this.projectName,
      'Images.xcassets',
      'AppIcon.appiconset',
      'Icon-60.png'
    )
  );

  this.fs.copy(
    this.templatePath('iosIcons', 'Icon-60@2x.png'),
    this.destinationPath(
      this.projectName,
      'ios',
      this.projectName,
      'Images.xcassets',
      'AppIcon.appiconset',
      'Icon-60@2x.png'
    )
  );

  this.fs.copy(
    this.templatePath('iosIcons', 'Icon-60@3x.png'),
    this.destinationPath(
      this.projectName,
      'ios',
      this.projectName,
      'Images.xcassets',
      'AppIcon.appiconset',
      'Icon-60@3x.png'
    )
  );

  this.fs.copy(
    this.templatePath('iosIcons', 'Icon-76.png'),
    this.destinationPath(
      this.projectName,
      'ios',
      this.projectName,
      'Images.xcassets',
      'AppIcon.appiconset',
      'Icon-76.png'
    )
  );

  this.fs.copy(
    this.templatePath('iosIcons', 'Icon-152@2x.png'),
    this.destinationPath(
      this.projectName,
      'ios',
      this.projectName,
      'Images.xcassets',
      'AppIcon.appiconset',
      'Icon-152@2x.png'
    )
  );
};

module.exports = function iosAppIcons() {
  const files = [
    'Contents.json',
    'Icon-Small.png',
    'Icon-Small@2x.png',
    'Icon-Small@3x.png',
    'Icon-20.png',
    'Icon-20@2x.png',
    'Icon-20@3x.png',
    'Icon-40.png',
    'Icon-40@2x.png',
    'Icon-40@3x.png',
    'Icon-60@2x.png',
    'Icon-60@3x.png',
    'Icon-76.png',
    'Icon-76@2x.png',
    'Icon-83.5@2x.png',
    'iTunesArtwork@2x.png'
  ];

  files.forEach(fileName => {
    this.fs.copy(
      this.templatePath('iosIcons', fileName),
      this.destinationPath(
        this.projectName,
        'ios',
        this.projectName,
        'Images.xcassets',
        'AppIcon.appiconset',
        fileName
      )
    );
  });
};

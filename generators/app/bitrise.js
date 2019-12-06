const Generator = require('yeoman-generator');

const loadBitriseInfo = require('./bitriseUtils');
const { BITRISE_YML } = require('./files');
const bitriseInitialization = require('./tasks/bitriseInitialization');
const nextSteps = require('./tasks/nextSteps');

class BitriseInit extends Generator {
  loadInfo() {
    const { configInfo, messageError } = loadBitriseInfo();
    this.configInfo = configInfo;
    this.messageError = messageError;
  }

  constructor(args, opts) {
    super(args, opts);

    this.option('verbose', {
      desc: 'Turns on verbose logging',
      alias: 'v',
      type: Boolean,
      default: false
    });

    this.conflicter.force = true;
    this.features = {
      bitrise: true
    };
    this.loadInfo();
  }

  install() {
    return Promise.resolve().then(() => bitriseInitialization.bind(this)());
  }

  writing() {
    if (this.configInfo.projectName && this.configInfo.projectPath) {
      const filepathWithoutExtension = BITRISE_YML.substring(0, BITRISE_YML.lastIndexOf('.'));
      const templatePath = `${filepathWithoutExtension}.ejs`;
      this.fs.copyTpl(
        this.templatePath(...templatePath.split('/')),
        this.destinationPath(...this.configInfo.projectPath.concat('/bitrise.yml').split('/')),
        {
          projectName: this.configInfo.projectName
        }
      );
    }
  }

  end() {
    nextSteps.bind(this)();
  }
}

module.exports = BitriseInit;

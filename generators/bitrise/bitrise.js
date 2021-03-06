const Generator = require('yeoman-generator');

const completeREADME = require('./tasks/completeREADME');
const bitriseInitialization = require('./tasks/bitriseInitialization');
const nextSteps = require('./tasks/nextSteps');
const loadBitriseInfo = require('./bitriseUtils');

const BITRISE_YML = 'bitrise.yml';

class BitriseInit extends Generator {
  async loadInfo() {
    const configInfo = await loadBitriseInfo.bind(this)();
    this.configInfo = configInfo;
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
  }

  install() {
    return Promise.resolve().then(() => bitriseInitialization.bind(this)());
  }

  writing() {
    if (this.configInfo && this.configInfo.projectName && this.configInfo.projectPath) {
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
    completeREADME.bind(this)();
    nextSteps.bind(this)();
  }
}

module.exports = BitriseInit;

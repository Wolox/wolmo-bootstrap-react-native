const Generator = require('yeoman-generator');

const bitriseInitialization = require('./tasks/bitriseInitialization');
const nextSteps = require('./tasks/nextSteps');

class BitriseInit extends Generator {
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

  end() {
    nextSteps.bind(this)();
  }
}

module.exports = BitriseInit;

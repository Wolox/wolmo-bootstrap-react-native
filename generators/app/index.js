const Generator = require('yeoman-generator');

const reactNativeCliInstall = require('./tasks/reactNativeCliInstall');
const reactNativeInit = require('./tasks/reactNativeInit');
const installDependencies = require('./tasks/installDependencies');
const appSetup = require('./tasks/appSetup');
const gitInitialization = require('./tasks/gitInitialization');
const reactNativeLink = require('./tasks/reactNativeLink');
const nextSteps = require('./tasks/nextSteps');

class ReactNativeBootstrap extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('verbose', {
      desc: 'Turns on verbose logging',
      alias: 'v',
      type: Boolean,
      default: false
    });

    this.conflicter.force = true;
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What's your project name?",
        validate: val =>
          (String(val).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? true
            : `${val} is not a valid name for a project. Please use a valid identifier name (alphanumeric).`)
      },
      {
        type: 'checkbox',
        name: 'features',
        message: "What's features should this project include?",
        choices: ['Login', 'Tabs', 'DrawerAndroid', 'DrawerIOS', 'Push Notifications'],
        filter: values =>
          values.reduce((answer, val) => {
            answer[val.replace(/ /g, '').toLowerCase()] = true;
            return answer;
          }, {})
      }
    ]).then(answers => {
      this.projectName = answers.name;
      this.features = answers.features;
    });
  }

  configuring() {
    return Promise.resolve()
      .then(() => reactNativeCliInstall.bind(this)())
      .then(() => reactNativeInit.bind(this)())
      .then(() => installDependencies.bind(this)());
  }

  writing() {
    appSetup.bind(this)();
  }

  install() {
    return Promise.resolve()
      .then(() => reactNativeLink.bind(this)())
      .then(() => gitInitialization.bind(this)());
  }

  end() {
    nextSteps.bind(this)();
  }
}

module.exports = ReactNativeBootstrap;

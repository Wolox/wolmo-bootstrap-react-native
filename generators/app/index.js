const Generator = require('yeoman-generator');

const reactNativeCliInstall = require('./tasks/reactNativeCliInstall');
const reactNativeInit = require('./tasks/reactNativeInit');
const installDependencies = require('./tasks/installDependencies');
const appSetup = require('./tasks/appSetup');
const gitInitialization = require('./tasks/gitInitialization');
const reactNativeLink = require('./tasks/reactNativeLink');
const nextSteps = require('./tasks/nextSteps');
const bundleInstall = require('./tasks/bundleInstall');

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
          String(val).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? true
            : `${val} is not a valid name for a project. Please use a valid identifier name (alphanumeric).`
      },
      {
        type: 'checkbox',
        name: 'features',
        message: "What's features should this project include?",
        choices: ['Login', 'Tabs', 'DrawerAndroid', 'DrawerIOS', 'Push Notifications', 'Google Analytics'],
        filter: values =>
          values.reduce((answer, val) => {
            answer[val.replace(/ /g, '').toLowerCase()] = true;
            return answer;
          }, {})
      },
      {
        type: 'confirm',
        name: 'landscape',
        message: "Would you like to enable landscape orientation? Psst! You probably don't want this!",
        default: false
      }
    ]).then(answers => {
      this.projectName = answers.name;
      this.features = answers.features;
      this.features.landscape = answers.landscape;

      return this.prompt([
        {
          type: 'input',
          name: 'bundleId',
          message: 'Enter the bundle id for your ios app',
          default: `com.wolox.${this.projectName}`
        }
      ]).then(answer => {
        this.bundleId = answer.bundleId;
      });
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
      .then(() => bundleInstall.bind(this)())
      .then(() => reactNativeLink.bind(this)())
      .then(() => gitInitialization.bind(this)());
  }

  end() {
    nextSteps.bind(this)();
  }
}

module.exports = ReactNativeBootstrap;

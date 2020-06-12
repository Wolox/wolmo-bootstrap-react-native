const Generator = require('yeoman-generator');

const bitriseInitialization = require('../bitrise/tasks/bitriseInitialization');

const reactNativeCliInstall = require('./tasks/reactNativeCliInstall');
const reactNativeInit = require('./tasks/reactNativeInit');
const installDependencies = require('./tasks/installDependencies');
const appSetup = require('./tasks/appSetup');
const gitInitialization = require('./tasks/gitInitialization');
const nextSteps = require('./tasks/nextSteps');
const bundleInstall = require('./tasks/bundleInstall');
const configureFastlane = require('./tasks/configureFastlane');
const installPods = require('./tasks/installPods');
const linkAppAssets = require('./tasks/linkAppAssets');
const chmodFirebaseScript = require('./tasks/chmodFirebaseScript');
const editBundleIdentifier = require('./tasks/editBundleIdentifier');
const configureIosProject = require('./tasks/configureIosProject');
const addFilesToGitIgnore = require('./tasks/addFilesToGitIgnore');
const lintFixProject = require('./tasks/lintFixProject');

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
        choices: [
          'Bitrise',
          'Crashlytics',
          'Drawer',
          'Firebase Analytics',
          'Firebase Performance',
          'Login and SignUp',
          'OnBoarding',
          'Push Notifications',
          'Redux Persist',
          'Tabs'
        ],
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
      .then(() => installDependencies.bind(this)())
      .then(() => configureFastlane.bind(this)())
      .then(() => addFilesToGitIgnore.bind(this)());
  }

  writing() {
    appSetup.bind(this)();
  }

  install() {
    const hasFirebaseConfiguration =
      this.features.crashlytics ||
      this.features.firebaseanalytics ||
      this.features.pushnotifications ||
      this.features.firebaseperformance;
    return Promise.resolve()
      .then(() => bundleInstall.bind(this)())
      .then(() => configureIosProject.bind(this)())
      .then(() => installPods.bind(this)())
      .then(() => linkAppAssets.bind(this)())
      .then(() => editBundleIdentifier.bind(this)())
      .then(() => lintFixProject.bind(this)())
      .then(() => hasFirebaseConfiguration && chmodFirebaseScript.bind(this)())
      .then(() => gitInitialization.bind(this)())
      .then(() => this.features.bitrise && bitriseInitialization.bind(this)());
  }

  end() {
    nextSteps.bind(this)();
  }
}

module.exports = ReactNativeBootstrap;

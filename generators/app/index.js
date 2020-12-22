const Generator = require('yeoman-generator');

// BITRISE
const bitriseInitialization = require('../bitrise/tasks/bitriseInitialization');

// CONFIGURING
const reactNativeInit = require('./tasks/configuringTasks/reactNativeInit');
const installDependencies = require('./tasks/configuringTasks/installDependencies');
const configureFastlane = require('./tasks/configuringTasks/configureFastlane');
const addFilesToGitIgnore = require('./tasks/configuringTasks/addFilesToGitIgnore');
// WRITING
const appSetup = require('./tasks/appSetup');
// INSTALL
const bundleInstall = require('./tasks/installTasks/bundleInstall');
const configureIosProject = require('./tasks/installTasks/configureIosProject');
const installPods = require('./tasks/installTasks/installPods');
const linkAppAssets = require('./tasks/installTasks/linkAppAssets');
const editBundleIdentifier = require('./tasks/installTasks/editBundleIdentifier');
const lintFixProject = require('./tasks/installTasks/lintFixProject');
const chmodFirebaseScript = require('./tasks/installTasks/chmodFirebaseScript');
const gitInitialization = require('./tasks/installTasks/gitInitialization');
// END
const nextSteps = require('./tasks/nextSteps');
const { GENERATOR_FEATURES } = require('./constants');

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
        choices: GENERATOR_FEATURES,
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
    ]).then(({ features, landscape, name }) => {
      this.projectName = name;
      this.features = features;
      this.features.landscape = landscape;
      this.features.hasFirebase =
        features.firebasecrashlytics || features.firebaseanalytics || features.firebaseperformance;
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
      .then(() => reactNativeInit.bind(this)())
      .then(() => installDependencies.bind(this)())
      .then(() => configureFastlane.bind(this)())
      .then(() => addFilesToGitIgnore.bind(this)());
  }

  writing() {
    appSetup.bind(this)();
  }

  install() {
    return Promise.resolve()
      .then(() => bundleInstall.bind(this)())
      .then(() => configureIosProject.bind(this)())
      .then(() => installPods.bind(this)())
      .then(() => linkAppAssets.bind(this)())
      .then(() => editBundleIdentifier.bind(this)())
      .then(() => lintFixProject.bind(this)())
      .then(() => this.features.hasFirebase && chmodFirebaseScript.bind(this)())
      .then(() => gitInitialization.bind(this)())
      .then(() => this.features.bitrise && bitriseInitialization.bind(this)());
  }

  end() {
    nextSteps.bind(this)();
  }
}

module.exports = ReactNativeBootstrap;

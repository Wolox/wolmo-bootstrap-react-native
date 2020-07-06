const latestSemver = require('latest-semver');
const semverRegex = require('semver-regex');

const runCommand = require('../runCommand');

const DEPENDENCIES = [
  '@react-native-community/async-storage',
  '@react-native-community/masked-view',
  '@react-navigation/native',
  '@react-navigation/stack',
  'apisauce',
  'cerealizr',
  'formik',
  'i18next',
  'react-native-config',
  // Delete '@0.47.0' when react-native-flipper fix a build issue on Android Release mode
  'react-native-flipper@0.47.0',
  'react-native-gesture-handler',
  'react-native-localize',
  'react-native-reanimated',
  'react-native-safe-area-context',
  'react-native-screens',
  'react-native-splash-screen',
  'react-redux',
  'reactotron-apisauce',
  'reactotron-react-native',
  'reactotron-redux',
  'redux',
  'redux-recompose',
  'redux-thunk',
  'reselect',
  'seamless-immutable',
  'typescript'
];

const DEV_DEPENDENCIES = [
  '@react-native-community/eslint-config',
  '@types/jest',
  '@types/react',
  '@types/react-native',
  '@types/react-redux',
  '@types/react-test-renderer',
  '@types/seamless-immutable',
  'babel-eslint',
  'babel-plugin-import-glob',
  'babel-plugin-module-resolver',
  'enzyme-adapter-react-16',
  'enzyme-to-json',
  'enzyme',
  'eslint-config-wolox-react-native',
  'eslint-config-airbnb',
  'eslint-config-prettier',
  'eslint-plugin-flowtype',
  'eslint-plugin-import',
  'eslint-plugin-jest',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-prettier',
  'eslint-plugin-react-hooks',
  'eslint-plugin-react',
  'eslint',
  'eslint-plugin-babel',
  'eslint-plugin-react-native',
  'husky',
  'jest-react-native',
  'jsdom-global',
  'jsdom',
  'prettier-eslint',
  'prettier',
  'react-native-mock-render',
  'redux-mock-store'
];

// eslint-disable-next-line valid-jsdoc
/**
 * The eslint config we use may have issues between the different plugins we use.
 * The solution for this is installing the proper version of each plugin declared in the eslint config package
 * More info here: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#usage
 */
function getLinterPluginVersions(projectName, options) {
  // Get peer dependencies of eslint-config-airbnb and its versions
  // This command will return something like the following:
  // { eslint: '^3.19.0 || ^4.3.0', 'eslint-plugin-jsx-a11y': '^5.1.1', 'eslint-plugin-import': '^2.7.0', 'eslint-plugin-react': '^7.1.0' }
  return runCommand({
    command: [
      'yarn',
      ['info', 'eslint-config-airbnb', 'peerDependencies', '--json'],
      { cwd: `${process.cwd()}/${projectName}` }
    ],
    loadingMessage: "Getting eslint plugins' versions",
    successMessage: 'Successfuly download plugins version info',
    failureMessage: 'Error getting info of eslint plugins. Turn verbose mode on for detailed logging',
    context: options
  }).then(({ result }) => {
    // keep latest if the dependency has different versions. e.g: eslint: '^3.19.0 || ^4.3.0'
    const dependencies = JSON.parse(result).data;
    Object.keys(dependencies).forEach(eachDependency => {
      const latestDependencyVersion = latestSemver(dependencies[eachDependency].match(semverRegex()));
      dependencies[eachDependency] = `^${latestDependencyVersion}`;
    });
    return dependencies;
  });
}

function yarnInstall(projectName, deps, options, dev) {
  const yarnArgs = dev ? ['add', '--dev'].concat(deps) : ['add'].concat(deps);
  return runCommand({
    command: ['yarn', yarnArgs, { cwd: `${process.cwd()}/${projectName}` }],
    loadingMessage: `Fetching ${dev ? 'dev dependencies' : 'dependencies'}`,
    successMessage: `${dev ? 'Dev dependencies' : 'Dependencies'} ready!`,
    failureMessage: `${
      dev ? 'Dev dependencies' : 'Dependencies'
    } installation failed. Turn verbose mode on for detailed logging`,
    context: options
  });
}

module.exports = function installDependencies() {
  if (this.features.loginandsignup) {
    DEPENDENCIES.push('react-native-keyboard-spacer');
  }
  if (this.features.tabs) {
    DEPENDENCIES.push('@react-navigation/bottom-tabs');
  }

  if (this.features.crashlytics || this.features.firebaseanalytics || this.features.pushnotifications) {
    DEPENDENCIES.push('@react-native-firebase/app');

    if (this.features.crashlytics) {
      DEPENDENCIES.push('@react-native-firebase/crashlytics');
    }
    if (this.features.firebaseanalytics) {
      DEPENDENCIES.push('@react-native-firebase/analytics');
    }
    if (this.features.pushnotifications) {
      DEPENDENCIES.push('react-native-push-notification');
      DEPENDENCIES.push('@react-native-firebase/messaging');
      DEPENDENCIES.push('@react-native-community/push-notification-ios');
      DEV_DEPENDENCIES.push('@types/react-native-push-notification');
    }
    if (this.features.firebaseperformance) {
      DEPENDENCIES.push('@react-native-firebase/perf');
    }
  }

  if (this.features.drawer) {
    DEPENDENCIES.push('@react-navigation/drawer');
  }

  if (this.features.reduxpersist) {
    DEPENDENCIES.push('redux-persist');
    DEPENDENCIES.push('redux-persist-seamless-immutable');
  }

  if (this.features.onboarding) {
    DEPENDENCIES.push('react-native-swiper');
  }

  return getLinterPluginVersions(this.projectName, this.options).then(plugins => {
    const pluginNames = Object.keys(plugins);
    const fixedDevDeps = DEV_DEPENDENCIES.map(
      // Use a specific version of a dependency to avoid conflicts with other dependencies.
      dependency => (pluginNames.includes(dependency) ? `${dependency}@${plugins[dependency]}` : dependency)
    );
    return yarnInstall(this.projectName, DEPENDENCIES, this.options)
      .then(() => yarnInstall(this.projectName, fixedDevDeps, this.options, true))
      .catch(() => {
        process.exit(1);
      });
  });
};

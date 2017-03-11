const Generator = require('yeoman-generator');

const reactNativeCliInstall = require('./reactNativeCliInstall')

class ReactNativeBootstrap extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  method1() {
    console.log('method1');
    return reactNativeCliInstall();
  }

  method2() {
    console.log('method2');
    return reactNativeCliInstall();
  }
};

module.exports = ReactNativeBootstrap;

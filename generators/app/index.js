const Generator = require('yeoman-generator');

const reactNativeCliInstall = require('./reactNativeCliInstall')
const reactNativeInit = require('./reactNativeInit');

class ReactNativeBootstrap extends Generator {

  constructor(args, opts) {
    super(args, opts);

    this.option('verbose', {
      desc: 'Turns on verbose logging',
      alias: 'v',
      type: Boolean,
      default: false
    });
  }

  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'What\'s your project name?',
      validate: (val) => val && !/ /.test(val) ? true : 'The project name is required and can\'t contain spaces'
    }]).then((answers) => {
      return reactNativeCliInstall(this.options).then(() => answers);
    }).then((answers) => {
      return reactNativeInit(answers.name, this.options)
    });
  }
};

module.exports = ReactNativeBootstrap;

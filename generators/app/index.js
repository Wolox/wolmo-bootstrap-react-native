const Generator = require('yeoman-generator');

const reactNativeCliInstall = require('./tasks/reactNativeCliInstall')
const reactNativeInit = require('./tasks/reactNativeInit');
const installDependencies = require('./tasks/installDependencies');

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
      this.projectName = answers.name;
    });
  }

  configuring() {
    return Promise.resolve().then(() => {
      return reactNativeCliInstall(this.options);
    }).then(() => {
      return reactNativeInit(this.projectName, this.options)
    }).then(() => {
      return installDependencies(this.projectName, this.options)
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html')
    );
  }
};

module.exports = ReactNativeBootstrap;

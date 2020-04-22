const { copyTemplateFile } = require('../../utils');
const { AUTH_ACTIONS, AUTH_REDUCER, AUTH_SERVICE } = require('../../files');

const TEMPLATE_FILES = [AUTH_ACTIONS, AUTH_REDUCER, AUTH_SERVICE];

module.exports = function onBoardingAndLoginCommonFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
};

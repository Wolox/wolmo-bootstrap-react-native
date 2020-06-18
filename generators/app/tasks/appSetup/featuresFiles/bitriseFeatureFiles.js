const { copyTemplateFile } = require('../utils');
const { BITRISE_YML } = require('../files');

const TEMPLATE_FILES = [BITRISE_YML];

module.exports = function bitriseFeatureFiles() {
  TEMPLATE_FILES.forEach(copyTemplateFile.bind(this));
};

/* eslint-disable id-length */
const { copyFile } = require('../../utils');
const { ANIMATED_CUSTOM_TEXT_INPUT, ANIMATED_CUSTOM_TEXT_INPUT_STYLES } = require('../../files');

const FILES = [ANIMATED_CUSTOM_TEXT_INPUT, ANIMATED_CUSTOM_TEXT_INPUT_STYLES];

module.exports = function animatedCustomTextInputFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};

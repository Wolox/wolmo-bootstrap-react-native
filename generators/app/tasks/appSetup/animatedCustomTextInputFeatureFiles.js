/* eslint-disable id-length */
const { copyFile } = require('../../utils');
const {
  ANIMATED_CUSTOM_TEXT_INPUT,
  ANIMATED_CUSTOM_TEXT_INPUT_STYLES,
  ANIMATED_CUSTOM_TEXT_INPUT_CONSTANTS,
  ANIMATED_CUSTOM_TEXT_INPUT_INTERFACE
} = require('../../files');

const FILES = [
  ANIMATED_CUSTOM_TEXT_INPUT,
  ANIMATED_CUSTOM_TEXT_INPUT_STYLES,
  ANIMATED_CUSTOM_TEXT_INPUT_CONSTANTS,
  ANIMATED_CUSTOM_TEXT_INPUT_INTERFACE
];

module.exports = function animatedCustomTextInputFeatureFiles() {
  FILES.forEach(copyFile.bind(this));
};

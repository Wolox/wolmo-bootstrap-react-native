const fs = require('fs');

const { BITRISE_PROMPTS } = require('./constants');

function buildAllPrompts(context) {
  return context.prompt(Object.keys(BITRISE_PROMPTS).map(key => BITRISE_PROMPTS[key]));
}

function buildSomePrompts(keys, context) {
  return context.prompt(keys.map(key => BITRISE_PROMPTS[key]));
}

function isNotEmpty(key, value) {
  return (
    ((!value && typeof value === 'string') || value === null || value === undefined) &&
    key !== 'projectPath' &&
    key !== 'projectName'
  );
}

function buildMessage(keys) {
  let lastMessage = '';
  keys.forEach(
    key =>
      (lastMessage = lastMessage.concat(
        '\n',
        `The field ${key} in bitriseInfo.json file is required to run the script`
      ))
  );
  return lastMessage;
}
function validateConfigObject(object, context) {
  let keys = [];
  if (!object) {
    return 'The bitriseInfo.json file is written wrong';
  }
  Object.keys(object).forEach(key => {
    if (isNotEmpty(key, object[key])) {
      keys = [...keys, key];
    }
  });
  const lastMessage = buildMessage(keys);
  console.log(lastMessage.red.bold.underline);
  return buildSomePrompts(keys, context);
}

async function loadBitriseInfoFile(context) {
  let configInfo = null;
  try {
    configInfo = JSON.parse(
      fs.readFileSync('./wolmo-bootstrap-react-native/generators/app/bitriseInfo.json').toString()
    );
  } catch (e) {
    console.log('The bitriseInfo.json file is written wrong'.red.underline.bold);
    configInfo = await buildAllPrompts(context);
  }
  return configInfo;
}

async function loadBitriseInfo() {
  const configInfo = await loadBitriseInfoFile(this);
  const lastConfig = await validateConfigObject(configInfo, this);
  const newConfig = {
    ...configInfo,
    ...lastConfig
  };
  return newConfig;
}

module.exports = loadBitriseInfo;

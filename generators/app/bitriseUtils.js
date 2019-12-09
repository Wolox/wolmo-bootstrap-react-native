const fs = require('fs');

function isNotEmpty(key, value) {
  return ((!value && typeof value === 'string') || value === null || value === undefined) &&
    key !== 'projectPath' &&
    key !== 'projectName'
    ? `The field ${key} in bitriseInfo.json file is required to run the script`
    : '';
}

function validateConfigObject(object) {
  let lastMessage = '';
  if (!object) {
    return 'The bitriseInfo.json file is written wrong';
  }
  Object.keys(object).forEach(key => {
    const message = isNotEmpty(key, object[key]);
    if (message) {
      lastMessage = lastMessage.concat('\n', message);
    }
  });
  return lastMessage;
}

function loadBitriseInfoFile() {
  let configInfo = null;
  try {
    configInfo = JSON.parse(
      fs.readFileSync('./wolmo-bootstrap-react-native/generators/app/bitriseInfo.json').toString()
    );
  } catch (e) {
    console.log('The bitriseInfo.json file is written wrong'.red.underline.bold);
  }
  return configInfo;
}

function loadBitriseInfo() {
  const configInfo = loadBitriseInfoFile();
  const messageError = validateConfigObject(configInfo);
  return { configInfo, messageError };
}

module.exports = loadBitriseInfo;

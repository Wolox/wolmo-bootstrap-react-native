const apisauce = require('apisauce');

const baseURL = 'https://api.bitrise.io/v0.1';

const bitriseApi = apisauce.create({
  baseURL,
  timeout: 30000
});

bitriseApi.addMonitor(response => {
  if (!response.ok) {
    console.log(response.data);
  }
});

module.exports = bitriseApi;

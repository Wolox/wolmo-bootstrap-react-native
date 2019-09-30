const apisauce = require('apisauce');
const baseURL = 'https://api.bitbucket.org/2.0';

const bitriseApi = apisauce.create({
  baseURL,
  timeout: 30000
});

bitriseApi.addMonitor(response => {
  if (!response.ok) {
    console.log(response.data)
  }
});

module.exports = bitriseApi;

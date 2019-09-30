const apisauce = require('apisauce');
const baseURL = 'https://gitlab.com/api/v4';

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

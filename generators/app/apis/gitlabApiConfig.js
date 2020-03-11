const apisauce = require('apisauce');

const baseURL = 'https://gitlab.com/api/v4';

const gitlabApi = apisauce.create({
  baseURL,
  timeout: 30000
});

gitlabApi.addMonitor(response => {
  if (!response.ok) {
    console.log(response.data);
  }
});

module.exports = gitlabApi;

const apisauce = require('apisauce');

const baseURL = 'https://api.github.com';

const githubApi = apisauce.create({
  baseURL,
  timeout: 30000
});

githubApi.addMonitor(response => {
  if (!response.ok) {
    console.log(response.data)
  }
});

  
module.exports = githubApi;

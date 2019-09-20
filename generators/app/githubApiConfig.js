const apisauce = require('apisauce');

const baseURL = 'https://api.github.com';

const githubApi = apisauce.create({
  baseURL,
  timeout: 30000
});

githubApi.setHeaders({
    Authorization: 'token 5fe45aa1c5c16232e411892824675aacfef0fc81'
  })

module.exports = githubApi;

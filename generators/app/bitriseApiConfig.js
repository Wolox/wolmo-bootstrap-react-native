const apisauce = require('apisauce');
const baseURL = 'https://api.bitrise.io/v0.1';

const bitriseApi = apisauce.create({
  baseURL,
  timeout: 30000
});

bitriseApi.setHeaders({
    Authorization: 'eLse21ioH4ik5o_Ih_8hjwfUmXkI3SUD_3-H-M1BZ6qa9c40NQ0hM5YyfTy1_ignB0fK9b0muQ3n7oZBzBHtZg'
  })

module.exports = bitriseApi;

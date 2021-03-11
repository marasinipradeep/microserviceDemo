// Make sure you replace these values from the copied values of you app
// const APP_ID = 'f10312b5-63c4-4f76-9dc0-02c3484b907f';
// const APP_SECERET = 'VktlUbTK.p.Q_9cFJ-yi99OdjDB04acZa9';
// const TOKEN_ENDPOINT ='https://login.microsoftonline.com/2ef565f8-474e-47ef-aaa4-80d30fb0f79e/oauth2/v2.0/token';
// const MS_GRAPH_SCOPE = 'https://graph.microsoft.com/.default';

require('dotenv').config();

const axios = require('axios');
const qs = require('qs');

console.log(`the app id is ${process.env.APP_ID}`)
console.log(`the token is ${process.env.TOKEN_ENDPOINT}`)

const postData = {
  client_id: process.env.APP_ID,
  scope: process.env.MS_GRAPH_SCOPE,
  client_secret: process.env.APP_SECERET,
  grant_type: 'client_credentials'
};

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

let token = '';

axios
  .post(process.env.TOKEN_ENDPOINT, qs.stringify(postData))
  .then(response => {
      
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
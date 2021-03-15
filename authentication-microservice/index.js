require('dotenv').config();

const axios = require('axios');
const qs = require('qs');

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
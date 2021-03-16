// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var graph = require('@microsoft/microsoft-graph-client');
require('isomorphic-fetch');

module.exports = {
  getUserDetails: async function (accessToken) {
    const client = getAuthenticatedClient(accessToken);

    // const user = await client.api('/me').get();
    const user = await client
      .api('/me')
      .select('displayName,mail,mailboxSettings,userPrincipalName')
      .get();
    return user;
  },


  //get mail api
  getMail: async function (accessToken) {
    console.log(`I am inside graph .js getmail 1`)
    const client = getAuthenticatedClient(accessToken);
    console.log(`I am inside graph .js getmail client  2`)
    console.log(client);
    const mail = await client
      .api('/me/mailFolders/inbox')
      .orderby('createdDateTime DESC')
      .get();
    console.log(`I am inside graph .js getmail`)
    return mail;
  }
};

function getAuthenticatedClient(accessToken) {
  console.log(`I am inside graph .js getAuthenticatedClient 1`)
  // Initialize Graph client
  const client = graph.Client.init({
    // Use the provided access token to authenticate
    // requests
    authProvider: (done) => {
      done(null, accessToken);
    }
  });

  console.log(`I am inside graph .js getAuthenticatedClient 2`)
  console.log(client);
  return client;
}
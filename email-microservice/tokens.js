// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <TokensSnippet>
module.exports = {
  getAccessToken: async function(req) {
    if (req.user) {
      // Get the stored token
      var storedToken = req.user.oauthToken;
      console.log(`inside get access token ${storedToken}`);
      console.log(storedToken)

      if (storedToken) {
        if (storedToken.expired()) {
          // refresh token
          var newToken = await storedToken.refresh();
          console.log(`inside get new token ${newToken}`);

          // Update stored token
          req.user.oauthToken = newToken;
          return newToken.token.access_token;
        }

        // Token still valid, just return it
        return storedToken.token.access_token;
      }
    }
  }
};
// </TokensSnippet>

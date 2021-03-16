// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

var express = require('express');
var router = express.Router();
var tokens = require('../tokens.js');
var graph = require('../graph.js');

/* GET /calendar */
// <GetRouteSnippet>
router.get('/',async function(req, res) {
  console.log(`inside inbox line 1`);
    if (!req.isAuthenticated()) {
      // Redirect unauthenticated requests to home page
      console.log(`inside inbox line 2`);
      res.redirect('/')
    } else {
      console.log(`inside inbox line 3`);
      let params = {
        active: { inbox: true }
      };

      // Get the access token
      var accessToken;
      console.log(`inside inbox line 4`);
      try {
        console.log(`inside inbox line 5`);
        accessToken = await tokens.getAccessToken(req);
        console.log(`inside inbox line 6 ${accessToken}`);
      } catch (err) {
        req.flash('error_msg', {
          message: 'Could not get access token. Try signing out and signing in again.',
          debug: JSON.stringify(err)
        });
      }
      if (accessToken && accessToken.length > 0) {
        try {
          // Get the events
          var events = await graph.getMail(accessToken);
          params.events = events.value;
          console.log(`inside inbox line 12`);
        } catch (err) {
          console.log(`inside inbox line 13 the err is`);
          console.log(err)
          req.flash('error_msg', {
            message: 'Could not fetch events',
            debug: JSON.stringify(err)
          });
          console.log(`inside inbox line 14`);
        }
        console.log(`inside inbox line 15`);
      } else {
        req.flash('error_msg', 'Could not get an access token');
      }
      console.log(`before params`);
      console.log(params);
      res.render('inbox', params);
    }
    console.log(`inside inbox line 17`);
  }
);
// </GetRouteSnippet>

module.exports = router;
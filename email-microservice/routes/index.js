// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <IndexRouterSnippet>
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(`inside index routes`)
  let params = {
    active: { home: true }
  };
console.log(params)
  res.render('index', params);
});

module.exports = router;
// </IndexRouterSnippet>

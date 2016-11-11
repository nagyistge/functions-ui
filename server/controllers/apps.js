var express = require('express');
var router = express.Router();
var helpers = require('../helpers/app-helpers.js');

router.get('/', function(req, res) {
  successcb = function(data){
    res.json(data.apps);
  }

  helpers.getApiEndpoint(req, "/v1/apps", {}, successcb, helpers.standardErrorcb)
});

router.get('/:app', function(req, res) {
  successcb = function(data){
    res.json(data.app);
  }

  helpers.getApiEndpoint(req, "/v1/apps/" + encodeURIComponent(req.params.app), {}, successcb, helpers.standardErrorcb)
});

// Create New App
router.post('/', function(req, res) {
  successcb = function(data){
    //console.log("success!", data);
    res.json(data);
  }

  helpers.postApiEndpoint(req, "/v1/apps", {}, {app: {name: req.body.app}}, successcb, helpers.standardErrorcb);
});

// Update App
router.patch('/:app', function(req, res) {
  successcb = function(data){
    //console.log("success!", data);
    res.json(data);
  }

  helpers.execApiEndpoint('PUT', req,  "/v1/apps/" + encodeURIComponent(req.params.app) , {}, {app: req.body.app}, successcb, helpers.standardErrorcb);
});

// Delete App
router.delete('/:app', function(req, res) {
  successcb = function(data){
    //console.log("success!", data);
    res.json(data);
  }

  helpers.execApiEndpoint('DELETE', req,  "/v1/apps/" + encodeURIComponent(req.params.app) , {}, {}, successcb, helpers.standardErrorcb);
});


module.exports = router;
var express = require('express');
var router = express.Router();
const dummyData = require('../dummyData.json')

/* GET user. */
// Endpoint for retrieving a single user.
// *Set for dummy data for now.

//TODO need to make redux/users/ folder similar to redux/plans 
router.get('/:user', function(req, res, next) {
    console.log('got here');
    res.send(dummyData);
});

module.exports = router;

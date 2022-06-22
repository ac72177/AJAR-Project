const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

// Plan Model 
const Plan = require('../../models/Plan');

// simpler dummyData not nested
const plans = [{
        "_id": 123,
        "name": "Learn MongoDB",
        "labels": ["Summer Project"],
        "startDate": "2022-05-05",
        "dueDate": "2022-07-30",
        "isComplete": false,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        "belongsTo": "root", 
        "plans": [1234],
        "attachments": []
    }, {
        "_id": 1234,
        "name": "Fly a kite",
        "labels": ["Summer Project"],
        "startDate": "2022-06-21",
        "dueDate": "2022-09-01",
        "isComplete": true,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        "belongsTo": "123", 
        "plans": [],
        "attachments": []
    }]; 

// @route DELETE api/plans/:id
// @desc Delete a plan
// @access Public
router.delete('/:id', function (req, res, next) {
    Plan.findById(req.params.id)
        .then(
            plan => plan.remove().then(() => res.send({success: true}))
        ).catch(
            err => res.status(404).json({success: false})
        );
});

// @route GET api/plans
// @desc Get All Plans
// @access Public
router.get('/', function(req, res, next) {
    Plan.find()
        .sort({ date: -1 })
        .then(plans => res.send(plans))
});

// @route POST api/plans
// @desc POST a Plan
// @access Public
router.post('/', function (req, res, next) {
    const newPlan = new Plan({
        "_id": uuid(),
        "name": req.body.name,
        "labels": req.body.labels,
        "startDate": req.body.startDate,
        "dueDate": req.body.dueDate,
        "description": req.body.desc,
        "belongsTo": req.body.parent, 
        "plans": req.body.plans,
        "attachments": req.body.attachments,
    });
    newPlan.save().then(
        plan => res.send(plan)
    );
});


module.exports = router;

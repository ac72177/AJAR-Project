const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const dummyData = require('../dummyData.json')

const plans = []; // also dummyData 

// GET all plans TODO check if we only want it to be parent 
router.get('/:user', function(req, res, next) {
    console.log('got here');
    res.send(dummyData);
});

// GET plan by UUID 
router.get('/:planId', function (req, res, next) {
    const foundPlan = plans.find(plan => plan.id === req.params.planId);
    
    if (!foundPlan) return res.status(404).send({ message: 'Plan not found' });

    return res.send(foundPlan);
});

// CREATE plan 
router.post('/', function (req, res, next) {
    const plan = { id: uuid(), planName: req.body.planname, ingredients: req.body.ingredients, steps: req.body.steps };
    plans.push(plan);
    return res.send(plan);
});

// REPLACE PLAN
router.put('/:planId', function (req, res, next) {
    const foundPlan = plans.find(plan => plan.id === req.params.planId);
    if (foundPlan) {
        // test if can be replaced by function getPlanIndex
        const planIndex = plans.findIndex(plan => plan.id === req.params.planId);
        let plan = { 
            id: req.params.planId,
            // todo
        }
        plans[planIndex] = plan;
        res.send(plans);
    } else {
        res.status(400).send("No such plan");
    }
});

// DELETE a plan by UUID
router.delete('/:planId', function (req, res, next) {
    const planIndex = getPlanIndex(req.params.planId);
    plans.splice(planIndex, 1);
    return res.send(plans);

});

const getPlanIndex = (planId) => plans.findIndex(plan => plan.id === planId)

module.exports = router;

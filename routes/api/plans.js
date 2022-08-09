const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

// Plan Model
const Plan = require("../../models/Plan");

// @route DELETE api/plans/:id
// @desc Delete a plan
// @access Public
router.delete("/:userId/:planId", function (req, res, next) {
  Plan.findById(req.params.planId)
    .then((plan) =>
      plan.remove().then(() =>
        Plan.find({ owner: req.params.userId })
          .sort({ date: -1 })
          .then((plans) => res.send(plans))
      )
    )
    .catch((err) => res.status(404).json({ success: false }));
});

// @route GET api/plans
// @desc Get All Plans
// @access Public
router.get("/:userId", function (req, res, next) {
  Plan.find({ owner: req.params.userId })
    .sort({ date: -1 })
    .then((plans) => res.send(plans));
});

// @route POST api/plans
// @desc Create a Plan
// @access Public
router.post("/", function (req, res, next) {
  const newPlan = new Plan({
    _id: uuid(),
    name: req.body.name,
    labels: req.body.labels,
    startDate: req.body.startDate,
    dueDate: req.body.dueDate,
    description: req.body.desc,
    plans: req.body.plans,
    attachments: req.body.attachments,
    owner: req.body.owner,
  });
  newPlan
    .save()
    .then((plan) => res.send(plan))
    .catch((error) => console.error(error));
});

// @route PUT api/plans/planID
// @desc Modify a Plan
// @access Public
router.put("/:planID", function (req, res, next) {
  // tutorial: https://www.youtube.com/watch?v=M2u1W2CzXdE&ab_channel=LarsBilde
  const conditions = { _id: req.params.planID };
  Plan.findOneAndUpdate(conditions, req.body, { new: true })
    .then(() => {
      Plan.find({ owner: req.body.owner })
        .sort({ date: -1 })
        .then((plans) => res.send(plans));
    })
    .catch((error) => console.error(error));
});

// @route GET api/plans
// @desc Get one plan based on ID
// @access Public
router.get("/plan/:planID", function (req, res, next) {
  Plan.findById({ _id: req.params.planID })
    .sort({ date: -1 })
    .then((plans) => res.send(plans));
});

module.exports = router;

// @route POST api/plans/planID
// @desc post a Subplan to Plan
// @access Public
router.post("/:planID/subplans", function (req, res, next) {
  const conditions = { _id: req.params.planID };
  const newSubPlan = new Plan({
    _id: uuid(),
    name: req.body.name,
    labels: req.body.labels,
    startDate: req.body.startDate,
    dueDate: req.body.dueDate,
    description: req.body.desc,
    plans: req.body.plans,
    attachments: req.body.attachments,
    owner: req.body.owner,
  });
  Plan.findOneAndUpdate(conditions, { $push: { plans: newSubPlan } })
    .then(() => newSubPlan.save())
    .then(() => {
      Plan.find({ owner: req.body.user })
        .sort({ date: -1 })
        .then((plans) => res.send(plans));
    })
    .catch((error) => console.error(error));
});

// @route DELETE api/plans/:planId/subplans/:subplanId
// @desc Delete a subplan
// @access Public
router.delete("/:planId/subplans/:subplanId", function (req, res, next) {
  Plan.findById(req.params.planId)
    .then((plan) => {
      plan.plans = plan.plans.filter((subplan) => subplan._id !== req.params.subplanId)
      plan.save()
    })
    .then(() => Plan.findOneAndDelete({ _id: req.params.subplanId }))
    .then(() =>
      Plan.find({ owner: req.body.user })
        .sort({ date: -1 })
        .then((plans) => res.send(plans))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

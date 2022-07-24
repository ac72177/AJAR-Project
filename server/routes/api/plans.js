const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

// Plan Model
const Plan = require("../../models/Plan");

// @route DELETE api/plans/:id
// @desc Delete a plan
// @access Public
router.delete("/:id", function (req, res, next) {
  Plan.findById(req.params.id)
    .then((plan) =>
      plan.remove().then(() =>
        Plan.find()
          .sort({ date: -1 })
          .then((plans) => res.send(plans))
      )
    )
    .catch((err) => res.status(404).json({ success: false }));
});

// @route GET api/plans
// @desc Get All Plans
// @access Public
router.get("/", function (req, res, next) {
  Plan.find()
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
      Plan.find()
        .sort({ date: -1 })
        .then((plans) => res.send(plans));
    })
    .catch((error) => console.error(error));
});

module.exports = router;

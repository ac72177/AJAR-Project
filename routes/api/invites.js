const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

// Invite Model
const Invite = require("../../models/Invite");
const Plan = require("../../models/Plan")

/*
@route POST api/invites
@desc post an invite
@access Public
The body of this request should follow
{
    planId: <planId>,
    sender: <user auth0 token>
}
*/
router.post("/", function (req, res, next) {
    const conditions = { planId: req.body.planId, sender: req.body.sender };
    Invite.findOne(conditions)
        .then((invite) => {
            if (invite) {
                res.status(200).send({ inviteId: invite._id })

            } else {
                const newInvite = new Invite({
                    _id: uuid(),
                    planId: req.body.planId,
                    sender: req.body.sender
                })
                newInvite.save()
                    .then((invite) => {
                        res.status(200).send({ inviteId: invite._id })
                    })
            }
        })
        .catch((error) => res.status(400).send(error))
});

// @route DELETE api/invite/:inviteId
// @desc Delete an invite and push redeemer to plan
// @access Public
// body of this req should include the user who made the request.
router.delete("/:inviteId", function (req, res, next) {
    const conditions = { _id: req.params.inviteId }
    Invite.findOneAndDelete(conditions)
        .then((deletedInvite) => Plan.findOneAndUpdate({ _id: deletedInvite.planId }, { $push: { owner: req.body.owner } }, { new: true }))
        .then(() => res.status(200).send({ success: true }))
        .catch((error) => {
            console.log(error)
            res.status(400).send(error)
        })
});

module.exports = router
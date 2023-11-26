const router = require("express").Router()
const User = require("../models/User.model")

router.get('/:user_id', (req, res, next) => {

    const { user_id: _id } = req.params

    User
        .findById(_id)
        .then(user => res.json(user))
        .catch(err => next(err))

})



module.exports = router
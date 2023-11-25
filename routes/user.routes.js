const router = require("express").Router()
const User = require("../models/User.model")

router.get('/:user_id', (req, res, next) => {

    const user_id = req.params

    User
        .findById(user_id)
        .then(user => res.json(user))
        .catch(err => next(err))

})



module.exports = router
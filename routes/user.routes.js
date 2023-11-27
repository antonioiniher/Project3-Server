const router = require("express").Router()
const User = require("../models/User.model")

router.get('/:user_id', (req, res, next) => {

    const { user_id: _id } = req.params

    User
        .findById(_id)
        .then(user => res.json(user))
        .catch(err => next(err))

})

router.put('/edit/:user_id', (req, res, next) => {

    const { user_id: _id } = req.params

    const { email, password, username, description, role, avatar, address, phoneNumber, idSkype } = req.body

    User
        .findByIdAndUpdate(_id, { email, password, username, description, role, avatar, address, phoneNumber, idSkype })
        .then(user => res.json(user))
        .catch(err => next(err))

})

router.delete('/delete/:user_id', (req, res, next) => {

    const { user_id: _id } = req.params

    User
        .findByIdAndDelete(_id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))

})



module.exports = router
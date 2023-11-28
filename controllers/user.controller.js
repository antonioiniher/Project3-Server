const User = require("../models/User.model")

const getUserById = (req, res, next) => {

    const { user_id: _id } = req.params

    User
        .findById(_id)
        .then(user => res.json(user))
        .catch(err => next(err))

}

const editUserById = (req, res, next) => {

    const { user_id: _id } = req.params

    const { email, username, description, role, avatar, address, phoneNumber, idSkype } = req.body

    User
        .findByIdAndUpdate(_id, { email, username, description, role, avatar, address, phoneNumber, idSkype })
        .then(user => res.json(user))
        .catch(err => next(err))

}

const deleteUserById = (req, res, next) => {

    const { user_id: _id } = req.params

    User
        .findByIdAndDelete(_id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))

}

module.exports = {
    getUserById,
    editUserById,
    deleteUserById
}
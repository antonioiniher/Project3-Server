const User = require("../models/User.model")

const getUserById = (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(user => res.json(user))
        .catch(err => next(err))

}

const editUserById = (req, res, next) => {

    const { _id } = req.params

    const { email, username, description, role, avatar, address, phoneNumber, idSkype } = req.body

    User
        .findByIdAndUpdate(_id, { email, username, description, role, avatar, address, phoneNumber, idSkype })
        .then(user => res.json(user))
        .catch(err => next(err))

}

const deleteUserById = (req, res, next) => {

    const { _id } = req.params

    User
        .findByIdAndDelete(_id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))

}

const postUserRating = (req, res, next) => {

    const { owner_id } = req.params
    const { _id } = req.payload
    const { rating } = req.body

    User
        .findByIdAndUpdate(owner_id, { $push: { rating: { user: _id, value: rating } } })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

module.exports = {
    getUserById,
    editUserById,
    deleteUserById,
    postUserRating
}
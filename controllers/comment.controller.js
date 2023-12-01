const Comment = require("../models/Comment.model")

const createComment = (req, res, next) => {

    const { text, teacher } = req.body
    const { _id: user } = req.payload

    Comment
        .create({ teacher, user, text })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))

}

const getCommentByTeacher = (req, res, next) => {

    const { teacher_id } = req.params

    Comment
        .find({ teacher: teacher_id })
        .populate('user')
        .then(response => res.json(response))
        .catch(err => next(err))

}

module.exports = {
    createComment,
    getCommentByTeacher
}



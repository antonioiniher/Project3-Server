const Class = require("../models/Class.model")


const createClass = (req, res, next) => {

    const { title, description, languages, classType } = req.body
    const { _id: owner } = req.payload

    Class
        .create({ title, description, languages, classType, owner })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const getClasses = (req, res, next) => {

    Class
        .find()
        .populate({ path: "owner", select: "username _id" })
        .select({ title: 1, languages: 1, classType: 1, owner: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneClass = (req, res, next) => {

    const { class_id } = req.params

    Class
        .findById(class_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}





const editClass = (req, res, next) => {

    const { class_id } = req.params
    const { title, description, languages, classType } = req.body
    Class
        .findByIdAndUpdate(class_id, { title, description, languages, classType })
        .then(response => res.json(response))
        .catch(err => next(err))
}


module.exports = {
    createClass,
    getClasses,
    getOneClass,
    editClass,
}

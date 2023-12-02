const Class = require("../models/Class.model")

const createClass = (req, res, next) => {

    const { title, description, languages, classType } = req.body
    const { _id: owner } = req.payload

    Class
        .create({ title, description, languages, classType, owner })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))

}

const getClasses = (req, res, next) => {

    Class
        .find()
        .populate('owner')
        .select({ title: 1, languages: 1, classType: 1, owner: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const getOneClass = (req, res, next) => {

    const { class_id } = req.params

    Class
        .findById(class_id)
        .populate("owner")
        .then(response => res.json(response))
        .catch(err => next(err))

}

const editClass = (req, res, next) => {

    const { class_id } = req.params
    const { title, description, languages, classType } = req.body

    Class
        .findByIdAndUpdate(class_id, { title, description, languages, classType })
        .then(() => res.sendStatus(203))
        .catch(err => next(err))

}

const getClassbySearch = (req, res, next) => {

    const { language, classType, searchQuery = {} } = req.query

    if (language) searchQuery.languages = language
    if (classType) searchQuery.classType = classType

    Class
        .find(searchQuery)
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))


    // if (language === undefined && classType === undefined) {

    //     Class
    //         .find()
    //         .populate('owner')
    //         .select({ title: 1, languages: 1, classType: 1, owner: 1 })
    //         .then(response => {
    //             return res.json(response)
    //         })
    //         .catch(err => next(err))

    // } else if (language !== undefined && classType !== undefined) {

    //     Class
    //         .find({ languages: language, classType: classType })
    //         .populate('owner')
    //         .then(response => {
    //             return res.json(response)
    //         })
    //         .catch(error => next(error))

    // } else if (language !== undefined && classType === undefined) {

    //     Class
    //         .find({ languages: language })
    //         .populate('owner')
    //         .then(response => {
    //             return res.json(response)
    //         })
    //         .catch(error => next(error))

    // } else if (language === undefined && classType !== undefined) {

    //     Class
    //         .find({ classType: classType })
    //         .populate('owner')
    //         .then(response => {
    //             return res.json(response)
    //         })
    //         .catch(error => next(error))
    // }

}

const putClassRequest = (req, res, next) => {

    const { class_id } = req.params
    const { student_id } = req.body


    Class
        .findByIdAndUpdate(class_id, { $addToSet: { booking: { students: student_id } } })
        .then(response => res.json(response))
        .catch(error => next(error))
}

const getClassByStudent = (req, res, next) => {

    const { user_id } = req.payload._id

    Class
        .find({ booking: { $elemMatch: { student: user_id } } })
        .then(response => res.json(response))
        .catch(error => next(error))
}

const getClassByTeacher = (req, res, next) => {

    const { _id } = req.payload

    Class
        .findOne({ owner: _id })
        .populate('booking.students')
        .then(response => res.json(response))
        .catch(error => next(error))
}

const searchClassAndAccept = (req, res, next) => {

    const { classes_id, student_id } = req.body

    console.log(classes_id, student_id)
}


module.exports = {
    createClass,
    getClasses,
    getOneClass,
    editClass,
    getClassbySearch,
    putClassRequest,
    getClassByStudent,
    getClassByTeacher,
    searchClassAndAccept
}

const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")
const { createClass,
    getClasses,
    getOneClass,
    getClassbySearch,
    putClassRequest,
    getClassByStudent,
    getClassByTeacher } = require("../controllers/class.controller")

router.get("/all", getClasses)

router.get("/:class_id", getOneClass)

router.post("/create", verifyToken, createClass)

router.post("/join", verifyToken)

router.put("/edit/:class_id", verifyToken)

router.delete("/delete/:class_id", verifyToken)

router.get("/", getClassbySearch)

router.put("/putClassRequest/:class_id", verifyToken, putClassRequest)

router.get("/getClassByStudent/:student_id", verifyToken, getClassByStudent)

router.get("/getClassByTeacher", verifyToken, getClassByTeacher)

module.exports = router
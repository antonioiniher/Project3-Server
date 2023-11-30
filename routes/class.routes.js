const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")
const { createClass, getClasses, getOneClass, getClassbySearch } = require("../controllers/class.controller")


router.get("/all", getClasses)

router.get("/:class_id", getOneClass)

router.post("/create", verifyToken, createClass)

router.post("/join", verifyToken)

router.put("/edit/:class_id", verifyToken)

router.delete("/delete/:class_id", verifyToken)

router.get("/", getClassbySearch)


module.exports = router
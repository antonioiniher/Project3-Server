const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")
const { createClass,
    getClasses,
    getOneClass,
    getClassbySearch,
    putClassRequest,
    getClassByStudent,
    getClassByTeacher,
    searchClassAndAccept } = require("../controllers/class.controller")

router.get("/all", getClasses)

router.post("/create", verifyToken, createClass)

router.post("/join", verifyToken)

router.put("/edit/:class_id", verifyToken)

router.delete("/delete/:class_id", verifyToken)

router.put("/searchClassAndAccept", verifyToken, searchClassAndAccept)

router.get("/", getClassbySearch)

router.put("/putClassRequest/:class_id", verifyToken, putClassRequest)

router.get("/getClassByStudent/:student_id", verifyToken, getClassByStudent)

router.get("/getClassByTeacher", verifyToken, getClassByTeacher)

router.get("/:class_id", getOneClass)


module.exports = router

// Rutas más específicas primero
// router.get("/:class_id", getOneClass);
// router.put("/searchClassAndAccept", verifyToken, searchClassAndAccept);
// router.get("/getClassByStudent/:student_id", verifyToken, getClassByStudent);
// router.get("/getClassByTeacher", verifyToken, getClassByTeacher);

// // Rutas más generales después
// router.get("/all", getClasses);
// router.post("/create", verifyToken, createClass);
// router.post("/join", verifyToken);
// router.put("/edit/:class_id", verifyToken);
// router.delete("/delete/:class_id", verifyToken);
// router.get("/", getClassbySearch);
// router.put("/putClassRequest/:class_id", verifyToken, putClassRequest);

// module.exports = router;
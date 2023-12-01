const { verifyToken } = require("../middlewares/verifyToken")
const { createComment, getCommentByTeacher } = require("../controllers/comment.controller")
const router = require("express").Router()

router.post("/create", verifyToken, createComment)

router.get('/:teacher_id', getCommentByTeacher)

module.exports = router
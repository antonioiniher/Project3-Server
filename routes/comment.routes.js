const { verifyToken } = require("../middlewares/verifyToken")
const { createComment } = require("../controllers/comment.controller")
const router = require("express").Router()

router.post("/create", verifyToken, createComment)

module.exports = router
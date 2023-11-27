const router = require("express").Router()
const { getUserById, editUserById, deleteUserById } = require("../controllers/user.controller")
const { checkOwnerOr } = require("../middlewares/route-guard")
const { verifyToken } = require("../middlewares/verifyToken")

router.get('/:user_id', verifyToken, getUserById)

router.put('/edit/:user_id', verifyToken, checkOwnerOr('ADMIN'), editUserById)

router.delete('/delete/:user_id', verifyToken, checkOwnerOr('ADMIN'), deleteUserById)

module.exports = router
const router = require("express").Router()
const jwt = require('jsonwebtoken')
const { verifyToken } = require("../middlewares/verifyToken")
const bcrypt = require('bcryptjs')
const User = require("../models/User.model")
const saltRounds = 10


router.post('/signup', (req, res, next) => {

  const { email, password, username } = req.body

  if (password.length < 2) {
    res.status(400).json({ message: 'Password must have at least 3 characters' })
    return
  }


  User
    .findOne({ email })
    .then((foundUser) => {

      if (foundUser) {
        res.status(400).json({ message: "User already exists." })
        return
      }

      const salt = bcrypt.genSaltSync(saltRounds)
      const hashedPassword = bcrypt.hashSync(password, salt)

      return User.create({ email, password: hashedPassword, username })
    })
    .then(() => res.sendStatus(201))
    .catch(err => next(err))
})





router.post('/login', (req, res, next) => {

  const { email, password } = req.body

  if (email === '' || password === '') {
    res.status(400).json({ message: "Los campos de email y contraseña son obligatorios." });
    return;
  }

  User
    .findOne({ email })
    .then((foundUser) => {

      if (!foundUser) {
        res.status(401).json({ message: "Usuario no encontrado." })
        return
      }

      if (bcrypt.compareSync(password, foundUser.password)) {

        const { _id, email, username, role } = foundUser;
        const payload = { _id, email, username, role }

        const authToken = jwt.sign(
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "6h" }
        )

        res.json({ authToken })

      }
      else {
        res.status(401).json({ message: "Contraseña incorrecta" });
      }

    })
    .catch(err => next(err));
})



router.get('/verify', verifyToken, (req, res, next) => {

  const loggedUser = req.payload

  res.json({ loggedUser })
})



module.exports = router
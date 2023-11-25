module.exports = app => {

    const AuthRoutes = require("./routes/auth.routes")
    app.use("/api/auth", AuthRoutes)

}
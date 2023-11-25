module.exports = app => {

    const AuthRoutes = require("./auth.routes")
    app.use("/api/auth", AuthRoutes)

    const UserRoutes = require("./user.routes")
    app.use("/api/user", UserRoutes)

}
module.exports = app => {

    const AuthRoutes = require("./auth.routes")
    app.use("/api/auth", AuthRoutes)

    const UserRoutes = require("./user.routes")
    app.use("/api/user", UserRoutes)

    const ClassRoutes = require("./class.routes")
    app.use("/api/class", ClassRoutes)

    const UploadRoutes = require("./upload.routes")
    app.use("/api/upload", UploadRoutes)

}
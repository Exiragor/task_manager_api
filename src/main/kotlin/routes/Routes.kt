package routes

import controllers.UserController
import core.Config
import migrations.Migration
import require

fun initRouter(): dynamic {
    val express = require("express")
    val router = express.Router()

    router.get("/", {req, res ->
        res.send("Hello")
    })

    // Auth routes

    router.post("/auth/login", {req, res ->
        val controller = UserController(req, res)
        controller.login()
    })
    router.post("/auth/registration", {req, res ->
        val controller = UserController(req, res)
        controller.registration()
    })

    //Migration

    router.get("/migration/create", {req, res ->
        val pass = Config.config.get("migration_pass")

        @Suppress("UnsafeCastFromDynamic")
        if (pass == req.query.pass) {
            val temp = Migration()
            temp.create()
        }
        res.send("migration's page")
    })


    // user routes

    router.get("/user/profile", {req, res ->
        val controller = UserController(req, res)
        controller.getAllUsers()
    })

    router.get("/user/:id", {req, res ->
        val controller = UserController(req, res)
        controller.getUser()
    })



    return router
}

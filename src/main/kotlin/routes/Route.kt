package routes

import controllers.UserController
import core.Config
import core.Database
import migrations.Migration
import require
import middlewares.checkToken


class Route {
    private val express: dynamic = require("express")
    private var router: dynamic = null
    private var generalRoute: dynamic = null

    init {
        generalRoute = express.Router()
        router = express.Router()
        router.use("/", MainRouter())
        router.use("/user", UserRouter())


        generalRoute.use("/v1", {req, res, next ->
            checkToken(req, res, next)
        })
        generalRoute.use("/v1", router)
        generalRoute.use("/auth", AuthRouter())
        generalRoute.use("/migration", MigrationRouter())
    }

    fun getRouter(): dynamic {
        return generalRoute
    }

    private fun AuthRouter(): dynamic {
        val auth = express.Router()
        auth.post("/login", {req, res ->
            val controller = UserController(req, res)
            controller.login()
        })
        auth.post("/registration", {req, res ->
            val controller = UserController(req, res)
            controller.registration()
        })

        return auth
    }

    private fun MainRouter(): dynamic {
        val main = express.Router()

        main.get("/", {_, res ->
            res.send("hello")
        })

        return main
    }


    private fun UserRouter(): dynamic {
        val user = express.Router()

        user.get("/profile", {req, res ->
            val controller = UserController(req, res)
            controller.getAllUsers()
        })

        return user
    }

    private fun MigrationRouter(): dynamic {
        val migration = express.Router()

        migration.get("/create", {req, res ->
            val pass = Config.config.get("migration_pass")

            @Suppress("UnsafeCastFromDynamic")
            if (pass == req.query.pass) {
                val temp = Migration()
                temp.create()
            }
            res.send("migration's page")
        })

        return migration
    }

}




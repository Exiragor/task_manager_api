package routes

import controllers.UserController
import core.Async.Companion.promiseAsync
import core.Async.Companion.await
import core.Database
import models.Users
import require


//import require

class Route {
    private val express: dynamic = require("express")
    private var router: dynamic = null
    private var tempResult: Any = "kappa"

    init {
        router = express.Router()
        router.use("/", MainRouter())
        router.use("/auth", AuthRouter())
        router.use("/user", UserRouter())
    }

    fun getRouter(): dynamic {
        return router
    }

    private fun AuthRouter(): dynamic {
        val auth = express.Router()
        auth.get("/login", {_, res ->
            res.send("It's page for login")
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

        user.get("/profile", {_, res ->

        })

        return user
    }



}




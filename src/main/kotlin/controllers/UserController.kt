package controllers

import models.Users
import core.Async.Companion.promiseAsync
import core.Async.Companion.await
import core.Controller
import require

class UserController(req: dynamic, res: dynamic): Controller(req, res) {
    val model = Users()
    val passHash: dynamic = require("password-hash")

    fun getAllUsers() {

    }

    fun login() {
        promiseAsync {
            var user: dynamic = model.findUser<Any>(req.body.login).await()
            user = user[0]
            if (user != null) {
                console.log(user)
                if (passHash.verify(user.password, req.body.password)) {
                    response(object {
                        val status = true
                        val id = user.id
                        val firstName = user.name
                        val lastName = user.last_name
                    })
                } else {
                    response(object {
                        val status = false
                        val error = "Login or password is incorrect"
                    })
                }
            }
        }
    }
}
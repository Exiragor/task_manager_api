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
        promiseAsync {
            val res = model.getAllUsers("").await()
            response(res)
        }
    }

    fun login() {
        promiseAsync end@{
            var user: dynamic = model.findUser<Any>(req.body.email).await()
            user = user[0]
            if (user != null) {
                if (passHash.verify(user.password, req.body.password)) {
                    response(object {
                        val status = true
                        val id = user.id
                        val firstName = user.name
                        val lastName = user.last_name
                    })
                    return@end
                }
            }

            response(object {
                val status = false
                val error = "Login or password is incorrect"
            })
        }
    }

    fun registration() {
        promiseAsync end@ {
            val name = req.body.name
            val lastName = req.body.last_name
            val email = req.body.email
            val pass = req.body.password

            if (name == null || lastName == null || email == null || pass == null) {
                response(object {
                    val status = false
                    val error = "Not all fields are complete"
                })
                return@end
            }

            val users: dynamic = model.findUser<Any>(email).await()

            @Suppress("UnsafeCastFromDynamic")
            if (users.length != 0) {
                response(object {
                    val status = false
                    val error = "This email is unavailable"
                })
                return@end
            }


            val newUser: dynamic = model.newUser<Any>(
                name,
                lastName,
                passHash.generate(pass),
                email
            ).await()

            response(object {
                val status = true
            })

        }
    }
}
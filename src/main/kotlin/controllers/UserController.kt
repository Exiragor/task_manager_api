package controllers

import models.User
import core.Async.Companion.promiseAsync
import core.Async.Companion.await
import core.Config.config
import core.Controller
import models.Token
import require

class UserController(req: dynamic, res: dynamic): Controller(req, res) {
    val model = User()
    val passHash: dynamic = require("password-hash")

    fun getAllUsers() {
        promiseAsync {
            val res = model.getAllUsers("").await()
            response(res)
        }
    }

    fun login() {
        promiseAsync end@{
            val email: String = req.body.email.toString()
            val password: String = req.body.password.toString()

            var user: dynamic = model.findUser<Any>(email).await()
            user = user[0]

            if (user != null) {
                if (passHash.verify(password, user.password)) {
                    val key = passHash.generate(user.email)
                    val updateKey = model.updateFields<Any>(user.id, object {
                        val secret_key = key
                    })

                    val jwt = Token()

                    val token = jwt.generate(user.id, key, config.get("secretKey"), "token")
                    val refreshToken = jwt.generate(user.id, key, config.get("secretKey"), "refresh")

                    response(object {
                        val status = true
                        val id = user.id
                        val token = token
                        val refresh_token = refreshToken
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
            val email: String = req.body.email.toString()
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
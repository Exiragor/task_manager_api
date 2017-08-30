package middlewares

import models.Token
import core.Async.Companion.promiseAsync
import core.Async.Companion.await
import core.Config.config
import models.User
import require

fun checkToken(req: dynamic, res: dynamic, next: dynamic) {

    val token = req.body.token || req.query.token || req.headers["x-access-token"]
    val jwt: dynamic = require("jsonwebtoken")
    // decode token
    if (token) {
        promiseAsync {
            jwt.verify(token, config.get("secretKey"), { err, decoded ->
                if (err != null) {
                    res.json(object {
                        val status = false
                        val message = "Failed to authenticate token."
                    })
                } else {
                    req.tokenInfo = decoded
                    val id: Int = req.tokenInfo.id

                    promiseAsync {
                        val user = User()
                        val result: dynamic = user.findUser<Any>(id).await()

                        if (result[0] != null) {
                            if (req.tokenInfo.key == result[0].secret_key)
                                next()
                            else
                                res.json(object {
                                    val status = false
                                    val mess = "Your token is invalid"
                                })
                        } else {
                            res.json(object {
                                val status = false
                                val mess = "Your request is invalid"
                            })
                        }
                    }
                }
                next()
            })

        }
    } else {
        res.status(403).send(object {
            val status = false
            val mess = "No token provided"
        })
    }
}
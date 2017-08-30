package middlewares

import models.Token
import core.Async.Companion.promiseAsync
import core.Async.Companion.await
import models.User

fun checkToken(req: dynamic, res: dynamic, next: dynamic) {

    val token = req.body.token || req.query.token || req.headers["x-access-token"]
    val jwt = Token()
    // decode token
    if (token) {
        promiseAsync {
            val info: dynamic = jwt.verify(token.toString())
            console.log(info)

            if (info[0] != null) {
                res.json(object {
                    val status = false
                    val message = "Failed to authenticate token."
                })
            } else {
                console.log(info[1])
                req.tokenInfo = info[1]

                val id: Int = req.tokenInfo.id
                val user = User()
                val result: dynamic = user.findUser<Any>(id)

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
            next()
        }
    } else {
        res.status(403).send(object {
            val status = false
            val mess = "No token provided"
        })
    }
}
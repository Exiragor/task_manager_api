package models

import core.Model
import require
import core.Config.config
import core.Async.Companion.promiseAsync
import core.Async.Companion.await

class Token: Model() {
    val jwt = require("jsonwebtoken")

    fun generate(id: Int, user_ctrl: String, secretKey: String, mode: String): String {
        val infoUser = object {
            val id = id
            val key = user_ctrl
            val mode = mode
        }

        var expires = 0
        if (mode == "refresh") {
            expires = 999999999
        }

        val token = jwt.sign(infoUser, secretKey, object {
            val expiresIn = if (expires == 0) 174800 else expires
        })

        return token
    }

    fun verify(token: String): ArrayList<dynamic> {
        val list = ArrayList<dynamic>()
        promiseAsync end@ {
            val result = jwt.verify(token, config.get("secretKey"), {err, decoded ->
                list.add(err)
                list.add(decoded)
                console.log(list)
            }).await()

            return@end
        }

        console.log(list)
        return list
    }
}
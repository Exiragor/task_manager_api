package models

import core.Model
import kotlin.js.Promise
import core.Async.Companion.await
import core.Async.Companion.promiseAsync

class Users : Model() {
    var firstName: String = ""
    var age: Int = 0
    var lastName: String = ""
    var email: String = ""
    var phone: String = ""

    init {

    }

    fun <T> getAllUsers(value: T): Promise<T> {
        var result: dynamic = null

        try {
            result = db.pool.select("id", "name").from("users")
        }
        catch (e: Exception) {
            console.log(e.message)
        }

        return Promise.resolve(result)
    }

    fun <T> newUser(name: String, lastName:String, password: String, email: String): Promise<T> {
        var result: dynamic = null

        try {
            result = db.pool("users").insert(object {
                val name = name
                val last_name = lastName
                val password = password
                val email = email
            })
        }
        catch (e: Exception) {
            console.log(e.message)
        }

        return Promise.resolve(result)
    }

    fun <T> findUser(login: String): Promise<T> {
        var result: dynamic = null

        try {
            result = db.pool("users").select().where("login", login)
        }
        catch (e: Exception) {
            e.message
        }

        return Promise.resolve(result)
    }
}

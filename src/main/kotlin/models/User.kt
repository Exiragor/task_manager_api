package models

import core.Model
import kotlin.js.Promise
import core.Async.Companion.await
import core.Async.Companion.promiseAsync
import kotlin.js.Date

class User : Model() {
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
            val date = Date()
            result = db.pool("users").insert(object {
                val name = name
                val last_name = lastName
                val password = password
                val email = email
                val created_at = date
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
            result = db.pool("users").select().where("email", login)
        }
        catch (e: Exception) {
            e.message
        }

        return Promise.resolve(result)
    }

    fun <T> updateFields(id: Int, fields: dynamic): Promise<T> {
        val result = db.pool("users").update(fields).where("id", id)

        return Promise.resolve(result)
    }

    fun <T> findUser(id: Int): Promise<T> {
        var result: dynamic = null

        try {
            result = db.pool("users").select().where("id", id)
        }
        catch (e: Exception) {
            e.message
        }

        return Promise.resolve(result)
    }
}

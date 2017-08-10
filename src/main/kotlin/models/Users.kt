package models

import core.Model
import kotlin.js.Promise

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
            e.message
        }

        return Promise.resolve(result)
    }

    fun <T> loginUser(value: T): Promise<T> {
        var result: dynamic = null

        try {

        }
        catch (e: Exception) {
            e.message
        }

        return Promise.resolve(result)
    }
}

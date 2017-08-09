package models
import core.Database.Companion.getInstance
import kotlin.js.Promise

class Users {
    var firstName: String = ""
    var age: Int = 0
    var lastName: String = ""
    var email: String = ""
    var phone: String = ""
    val db: dynamic = getInstance()

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
}

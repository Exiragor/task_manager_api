package core

import kotlin.coroutines.experimental.Continuation
import kotlin.coroutines.experimental.EmptyCoroutineContext
import kotlin.coroutines.experimental.startCoroutine
import kotlin.coroutines.experimental.suspendCoroutine
import kotlin.js.Promise
import core.Database.Companion.getInstance

/**
 * Async class - for async tasks
 */

class Async {

    var temp: dynamic = null

    fun <T> getUserName(value: T): Promise<T> {


        try {
            val db: dynamic = getInstance()
            temp = db.pool.select("name").from("users")
        }
        catch (e: Exception) {
            console.log(e.message)
        }

        return Promise.resolve(temp)
    }

    companion object {
        suspend fun <T> Promise<T>.await(): T = suspendCoroutine {
            then(it::resume).catch(it::resumeWithException)
        }

        fun <T> promiseAsync(c: suspend () -> T): Promise<T> {
            return Promise { resolve, reject ->
                c.startCoroutine(object : Continuation<T> {
                    override fun resume(value: T) = resolve(value)

                    override fun resumeWithException(exception: Throwable) = reject(exception)

                    override val context = EmptyCoroutineContext
                })
            }
        }
    }


}
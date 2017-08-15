package migrations

import core.Database
import core.Async.Companion.promiseAsync
import core.Async.Companion.await

class Migration {

    val db: dynamic = Database.getInstance()

    fun create() {
        promiseAsync {
            createUsers<Any>(db).await()
            createGroups<Any>(db).await()
            createTasks<Any>(db).await()
            createGroups2Users<Any>(db).await()
        }
    }
}
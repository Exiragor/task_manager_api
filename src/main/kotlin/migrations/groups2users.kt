package migrations

import kotlin.js.Promise

fun <T> createGroups2Users(db: dynamic): Promise<T> {
    val res = db.pool.schema.createTableIfNotExists("groups2users", fun (table: dynamic) {
        table.increments()
        table.integer("group_id")
        table.integer("user_id")
    })

    return Promise.resolve(res)
}
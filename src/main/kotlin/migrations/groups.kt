package migrations

import kotlin.js.Promise


fun <T> createGroups(db: dynamic): Promise<T> {
    val res = db.pool.schema.createTableIfNotExists("groups", fun (table: dynamic) {
        table.increments()
        table.string("name", 100)
        table.string("type", 50)
        table.text("desc")
        table.string("icon")
        table.timestamps()
    })

    return Promise.resolve(res)
}
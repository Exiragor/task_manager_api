package migrations

import kotlin.js.Promise

fun <T> createTasks(db: dynamic): Promise<T> {
    val res = db.pool.schema.createTableIfNotExists("tasks", fun (table: dynamic) {
        table.increments()
        table.string("name", 200)
        table.text("description")
        table.dateTime("deadline")
        table.string("status", 50)
        table.integer("parent").defaultTo(0)
        table.integer("owner")
        table.integer("executor")
        table.integer("group").defaultTo(0)
        table.timestamps()
    })

    return Promise.resolve(res)
}
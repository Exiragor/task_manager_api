package migrations


fun createGroups() {
    db.tool.schema.createTableIfNotExists("groups", fun (table: dynamic) {
        table.increments()
        table.string("name", 100)
        table.string("type", 50)
        table.text("desc")
        table.string("icon")
        table.timestamps()
    })
}
package migrations


fun createUsers() {
    db.tool.schema.createTableIfNotExists("users", fun (table: dynamic) {
        table.increments()
        table.string("name", 100)
        table.string("last_name", 100)
        table.string("email", 120).unique()
        table.string("password", 150)
        table.string("secretKey", 100)
        table.string("avatar_path")
        table.timestamps()
    });
}
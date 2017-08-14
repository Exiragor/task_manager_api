package migrations

import core.Database

val db: dynamic = Database.getInstance()

class Migration {

    init {
        createUsers()

    }
}
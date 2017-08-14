package core

import require

class Database {
    var pool: dynamic = null
    private val knex = require("knex")

    init {
        connection()
    }

    private fun connection() {
        pool = knex(object {
            val client = "mysql"
            val connection = object {
                val host = Config.config.get("db.hostname")
                val user = Config.config.get("db.username")
                val password = Config.config.get("db.password")
                val database = Config.config.get("db.name")
            }
        })
    }

    companion object {
        private var instance: dynamic = null

        fun getInstance() {
            if (instance === null)
                instance = Database()
            return instance
        }
    }

}


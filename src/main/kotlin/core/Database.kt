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
                val host = "localhost"
                val user = "root"
                val password = "root"
                val database = "task_manager"
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


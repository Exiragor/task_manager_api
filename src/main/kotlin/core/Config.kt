package core
import require

class Config {
    companion object config{
        val conf: dynamic = require("config")

        fun get(name: String): dynamic {
            return conf.get(name)
        }
    }
}

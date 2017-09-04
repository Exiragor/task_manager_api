import routes.Route
import routes.initRouter

class App {
    val express: dynamic = require("express")
    val bodyparser: dynamic = require("body-parser")
    var tool: dynamic = null

    init {
        tool = express()
        InitParsers()
        RouteOn()
    }

    private fun InitParsers() {
        tool.use(bodyparser.urlencoded(object {
            val extended = false
        }))
        tool.use(bodyparser.json())
    }

    private fun RouteOn() {
        tool.use("/v1", initRouter())
    }

}



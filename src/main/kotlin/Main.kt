import core.Config.config
external fun require(module:String):dynamic
 

fun main(args: Array<String>) {

    val app = App()
    val port = config.get("port")

    val listen = app.tool.listen(port, {
        println("Listening on port ${port}")
    })
}
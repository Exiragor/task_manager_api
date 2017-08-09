external fun require(module:String):dynamic

fun main(args: Array<String>) {

    val app = App()
    
    app.tool.listen(4800, {
        println("Listening on port 4800")
    })
}
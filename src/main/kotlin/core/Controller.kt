package core

open class Controller(val req: dynamic, val res: dynamic) {

    fun response(fields: dynamic) {
        res.json(fields)
    }

    fun checkToken() {

    }
}

const ErrorResponse = require("../utils/errorResponse")
const errorHandler = (er, req, res, next) => {
    let err = {
        ...er
    }
    error.message = err.message
    console.log(err)
    //Objeto id invalido
    if (err.name == "CastError") {
        const message = "Resource not found"
        error = new ErrorResponse(message, 404)
    }
    //Llave duplicada
    if (err.code === 11000) {
        const message = "Campo de llave duplicada"
        error = new ErrorResponse(message, 400)
    }
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((errr) => {
            return {
                field: errr.path,
                message: errr.message
            }
        })
        error = new ErrorResponse(message, 400, message)
    }
    res.status(error.statusCode), json({ success: false, error: error.messageWithField || error.message || "Error de servidor" })
}
module.exports = errorHandler
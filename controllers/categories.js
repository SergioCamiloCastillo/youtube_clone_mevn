const Category = require("../models/Category");
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
//Obtener categorias
exports.getCategories = asyncHandler(async (req, res, next) => {
    const categories = await Category.find()
    res.status(200).json({ success: true, data: categories });
})
//Obtener categoria por ID
exports.getCategory = asyncHandler(async (req, res, next) => {

    const category = await Category.findById(req.params.id)

    if (!category) {
        return next(new ErrorResponse(`No se encontro la categoria con el id: ${req.params.id}`, 404))
    }
    res.status(200).json({ success: true, data: category });


})
//Crear categorias

exports.createCategories = asyncHandler(async (req, res, next) => {
    const category = await Category.create({
        ...req.body,
        userId: req.user.id
    })

    return res.status(200).json({ sucess: true, data: category })
})
//Actualizar categoria
exports.updateCategory = asyncHandler(async (req, res, next) => {

    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, context: 'query' })
    if (!category) {
        return next(new ErrorResponse(`No se encontro la categoria con el id: ${req.params.id}`, 404))
    }
    res.status(200).json({ succes: true, data: category })


})
//Eliminar categoria por ID
exports.deleteCategory = asyncHandler(async (req, res, next) => {

    const category = await Category.findById(req.params.id)

    if (!category) {
        return res.status(400).json({ success: true, error: `No se encontro la categoria con el id: ${req.params.id}` })
    }
    await category.remove()
    res.status(200).json({ success: true, data: category });


})
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema
const CategorySchema = new Schema({
    title: {
        type: String,
        minlength: [3, 'El titulo debe tener almenos 3 caracteres'],
        trim: true,
        unique: true,
        uniqueCaseInsensitive: true,
        required: [true, 'EL titulo es requerido']



    },
    description: {
        type: String,
        minlength: [3, 'Descripcion minimo de 3 letras'],
        required: [true, "La descripcion es requerida"],

    }

}, { timestamps: true })

CategorySchema.plugin(uniqueValidator,{message:'{PATH} already exists.'})
module.exports= mongoose.model('Category', CategorySchema);
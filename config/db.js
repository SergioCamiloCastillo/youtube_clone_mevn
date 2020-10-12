const mongoose = require('mongoose');
const DBconnection = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).catch(err => {
        console.log("No se pudo conectar a la bd", err);
    })
    console.log('MongoDB conectada')
}
module.exports = DBconnection
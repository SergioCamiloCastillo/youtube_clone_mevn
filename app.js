const express = require('express');
const app = express();
const morgan = require("morgan");
const categoryRoutes = require('./routes/categories');
mongoose = require('mongoose');

database = require('./config/db');

//Connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
},
    error => {
        console.log("Database could't be connected to: " + error)
    })

app.use(express.json());
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}
const dotenv = require("dotenv");

app.use('/api/v1/categories', categoryRoutes);
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log("Sistema corriendo en puerto " + PORT)
})
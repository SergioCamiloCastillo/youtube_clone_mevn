const express = require('express');
const app = express();
const morgan = require("morgan");
const DBconnection = require("./config/db.js");
DBconnection();
app.use(express.json());
const categoryRoutes = require('./routes/categories');
if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}
const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });

app.use('api/v1/categories', categoryRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Sistema corriendo en puerto " + PORT)
})
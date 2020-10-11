const express = require('express');
const app = express();
const colors=require('colors');
const dotenv= require("dotenv");
dotenv.config({path:"./config/.env"});
app.use((req,res,next)=>{
    res.json({title:"Hello worlddd"})
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log("Sistema corriendo en puerto "+PORT)
})
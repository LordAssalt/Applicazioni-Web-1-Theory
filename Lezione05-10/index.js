const express = require("express");
const morgan = require("morgan");
const { check , validatorResult } =require('express-validator');
const dao = require('./dao');
const app=express();
const port=3001;

app.listen(port,()=>{console.log("Server working" )});


// GET /courses
app.get('/api/courses',(req,res)=>{
    dao.listCourses().then(courses=>res.json(courses)).catch(()=>res.status(500).end())
});

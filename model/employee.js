// to create schema of table

var mongoose =require('mongoose');
var schema=mongoose.Schema({
    name:String,
    age:Number,
    dept:String,
    salary:Number
    
})
var EmployeeModel =mongoose.model("employee",schema);
module.exports =EmployeeModel;//schema exported
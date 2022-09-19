const Mongoose=require("mongoose")
const teachModel=Mongoose.model("teachs",Mongoose.Schema({
    teachname:String,
    teachfac:String,
    teachdept:String,
    teachcourse:String,
    teachsem:String,
    teachemail:String,
    teachpass:String
}))

module.exports={teachModel}
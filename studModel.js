const Mongoose=require("mongoose");
const studModel=Mongoose.model("students",Mongoose.Schema({
    studname:String,
    studregno:String,
    studcourse:String,
    studemail:String,
    studpass:String
}))

module.exports={studModel}
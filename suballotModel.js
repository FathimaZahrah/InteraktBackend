const Mongoose=require("mongoose")
const suballotModel=Mongoose.model("suballots",Mongoose.Schema({
    allotid:String,
    allotname:String,
    allotteachid:String,
    allotteahname:String
}))
module.exports={suballotModel}
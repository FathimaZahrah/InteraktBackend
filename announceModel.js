const Mongoose=require("mongoose")
const announceModel=Mongoose.model("announces",Mongoose.Schema({
message:String
}))
module.exports={announceModel}
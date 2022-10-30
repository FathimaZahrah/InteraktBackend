const Mongoose=require("mongoose")
const dataattenModel=Mongoose.model("dataattens",Mongoose.Schema({
    attendata:String
}))
module.exports=(dataattenModel)
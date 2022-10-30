const Mongoose=require("mongoose")
const dataassignModel=Mongoose.model("dmassigns",Mongoose.Schema({
    assigndata:String
}))
module.exports={dataassignModel}
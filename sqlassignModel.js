const Mongoose=require("mongoose")
const sqlassignModel=Mongoose.model("assignsqls",Mongoose.Schema({
assignsql:String
}))
module.exports={sqlassignModel}
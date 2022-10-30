const Mongoose=require("mongoose")
const datanoteModel=Mongoose.model("dmnotes",Mongoose.Schema({
    notedata:String
}))
module.exports={datanoteModel}
const Mongoose=require("mongoose")
const sqltestModel=Mongoose.model("sqltests",Mongoose.Schema({
    testsql:String
}))
module.exports={sqltestModel}
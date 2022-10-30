const Mongoose=require("mongoose")
const datatestModel=Mongoose.model("tests",Mongoose.Schema({
    testdata:String
}))
module.exports={datatestModel}
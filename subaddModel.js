const Mongoose=require("mongoose")
const subaddModel=Mongoose.model("subadds",Mongoose.Schema({
    subid:String,
    subname:String
}))

module.exports={subaddModel}
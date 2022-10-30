const Mongoose=require("mongoose")
const sqlattenModel=Mongoose.model("sqlattens",Mongoose.Schema({
    attensql:String
}))
module.exports={sqlattenModel}
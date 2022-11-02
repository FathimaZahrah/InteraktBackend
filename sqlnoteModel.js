const Mongoose=require("mongoose")
const sqlnoteModel=Mongoose.model("sqlnotes",Mongoose.Schema({
    notes:String
}))
module.exports={sqlnoteModel}
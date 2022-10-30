const Mongoose=require("mongoose")
const sqlnoteModel=Mongoose.model("notessqls",Mongoose.Schema({
notesql:String
}))
module.exports={sqlnoteModel}
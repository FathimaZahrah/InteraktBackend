const Express=require("express");
const Bodyparser=require("body-parser");
const Mongoose=require("mongoose");
const Cors=require("cors");
const { studModel } = require("./studModel");

const app=Express()

app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

Mongoose.connect("mongodb+srv://FathimaZahrah:fathima2003@cluster0.e5ifw.mongodb.net/InteraktDB?retryWrites=true&w=majority")

app.post("/signupstudent",async (req,res)=>{
    const data=req.body
    const ob=new studModel(data)
    ob.save((error,data)=>{
        if(error)
        {
            res.send("error occurred")
        }
        else
        {
            res.send(data)
        }
    })
})

app.listen(3200,()=>{console.log("server running at http://localhost:3200")})
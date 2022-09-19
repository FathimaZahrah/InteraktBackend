const Express=require("express");
const Bodyparser=require("body-parser");
const Mongoose=require("mongoose");
const Cors=require("cors");
const { studModel } = require("./studModel");
const { teachModel } = require("./teachModel");

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

app.post("/signupteacher",async(req,res)=>{
    const dataa=req.body
    const ob=new teachModel(dataa)
    ob.save((error,dataa)=>{
        if(error)
        {
            res.send("error occurred")
        }
        else
        {
            res.send(dataa)
        }
    })
})


app.listen(3200,()=>{console.log("server running at http://localhost:3200")})
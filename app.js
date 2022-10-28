const Express=require("express");
const Bodyparser=require("body-parser");
const Mongoose=require("mongoose");
const Cors=require("cors");
const { studModel } = require("./studModel");
const { teachModel } = require("./teachModel");
const { subaddModel } = require("./subaddModel");
const { suballotModel } = require("./suballotModel");
const { announceModel } = require("./announceModel");

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

app.post("/studlog", async (req, res) => {
    const request=req.body
    studModel.findOne({ studemail: request.studemail }, (err, data) => {
        if (data) {
            if (data.studpass == request.studpass) {
                res.send({ "success": true, data: data});
            }
            else {
                res.send({ "success": "Invalid email or password!"});
            }
        }
        else {
            res.send({ "success": "no user found!"});
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

app.post("/teachlog", async (req, res) => {
    const request=req.body
    teachModel.findOne({ teachemail: request.teachemail }, (err, dataa) => {
        if (dataa) {
            if (dataa.teachpass == request.teachpass) {
                res.send({ "success": true, dataa: dataa});
            }
            else {
                res.send({"success": "Invalid email or password!"});
            }
        }
        else {
            res.send({ "success": "no user found!"});
        }
    })
})

app.post("/subadd",async(req,res)=>{
    const data2=req.body
    const ob=new subaddModel(data2)
    ob.save(
        (error,data2)=>{
            if(error)
            {
                res.send("error occured")
            }
            else{
                res.send(data2)
            }
        }
    )
})

app.post("/suballot",async(req,res)=>{
    const data4=req.body
    const ob=new suballotModel(data4)
    ob.save(
        (error,data4)=>{
            if(error)
            {
                res.send("error occured")
            }
            else{
                res.send(data4)
            }
        }
    )
})

app.post("/teacherhome",async(req,res)=>{
    const data6=req.body
    const ob=new announceModel(data6)
    ob.save(
        (error,data6)=>{
            if(error)
            {
                res.send("error occured")
            }
            else{
                res.send(data6)
            }
        }
    )
})

app.get("/viewSub",async(req,res)=>{
    subaddModel.find((error,data2)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data2)
        }
    })
})

app.get("/announcements",async(req,res)=>{
    announceModel.find((error,data3)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data3)
        }
    })
})


app.listen(3200,()=>{console.log("server running at http://localhost:3200")})
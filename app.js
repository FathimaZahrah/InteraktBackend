const Express=require("express");
const Bodyparser=require("body-parser");
const Mongoose=require("mongoose");
const Cors=require("cors");
const { studModel } = require("./studModel");
const { teachModel } = require("./teachModel");
const { subaddModel } = require("./subaddModel");
const { suballotModel } = require("./suballotModel");
const { announceModel } = require("./announceModel");
const { datanoteModel } = require("./datanoteModel");
const { dataassignModel } = require("./dataassignModel");
const { datatestModel } = require("./datatestModel");
const dataattenModel = require("./dataattenModel");
const { sqlnoteModel } = require("./sqlnoteModel");
const { sqlassignModel } = require("./sqlassignModel");
const { sqltestModel } = require("./sqltestModel");
const { sqlattenModel } = require("./sqlattenModel");

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

app.post("/datanotesteach",async(req,res)=>{
    const data7=req.body
    const ob=new datanoteModel(data7)
    ob.save(
        (error,data7)=>{
            if(error)
            {
                res.send("error occured")
            }
            else{
                res.send(data7)
            }
        }
    )
})

app.post("/dataassignteach",async(req,res)=>{
    const data8=req.body
    const ob=new dataassignModel(data8)
    ob.save(
        (error,data8)=>{
            if(error)
            {
                res.send("error occured")
            }
            else{
                res.send(data8)
            }
        }
    )
})

app.post("/datatestteach",async(req,res)=>{
    const data9=req.body
    const ob=new datatestModel(data9)
    ob.save(
        (error,data9)=>{
            if(error)
            {
                res.send("error occured")
            }
            else{
                res.send(data9)
            }
        }
    )
})

app.post("/dataattenteach",async(req,res)=>{
    const data10=req.body
    const ob=new dataattenModel(data10)
    ob.save(
        (error,data10)=>{
            if(error)
            {
                res.send("error occured")
            }
            else{
                res.send(data10)
            }
        }
    )
})

app.post("/mynotestud",async(req,res)=>{
    const data11=req.body
    const ob=new sqlnoteModel(data11)
    ob.save(
        (error,data11)=>{
            if(error)
            {
                res.send("error occurred")
            }
            else{
                req.send(data11)
            }
        }
    )
})

app.post("/myassignteach",async(req,res)=>{
    const data12=req.body
    const ob=new sqlassignModel(data12)
    ob.save(
        (error,data12)=>{
            if(error)
            {
                res.send("error occurred")
            }
            else{
                req.send(data12)
            }
        }
    )
})

app.post("/mytestteach",async(req,res)=>{
    const data13=req.body
    const ob=new sqltestModel(data13)
    ob.save(
        (error,data13)=>{
            if(error){
                res.send("error occurred")
            }
            else{
                req.send(data13)
            }
        }
    )
})

app.post("/myattenteach",async(req,res)=>{
    const data14=req.body
    const ob=new sqlattenModel(data14)
    ob.save(
        (error,data14)=>{
            if(error)
            {
                res.send("error occurred")
            }
            else{
                req.send(data14)
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

app.get("/dataminenotes",async(req,res)=>{
    datanoteModel.find((error,data4)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data4)
        }
    })
})

app.get("/datamineassign",async(req,res)=>{
    dataassignModel.find((error,data5)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data5)
        }
    })
})

app.get("/dataminetest",async(req,res)=>{
    datatestModel.find((error,data6)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data6)
        }
    })
})

app.get("/datamineatten",async(req,res)=>{
    dataattenModel.find((error,data7)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data7)
        }
    })
})

app.get("/mysqlnotes",async(req,res)=>{
    sqlnoteModel.find((error,data8)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data8)
        }
    })
})

app.get("/mysqlassign",async(req,res)=>{
    sqlassignModel.find((error,data9)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data9)
        }
    })
})

app.get("/mysqltest",async(req,res)=>{
    sqltestModel.find((error,data10)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data10)
        }
    })
})

app.get("/mysqlatten",async(req,res)=>{
    sqlattenModel.find((error,data11)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data11)
        }
    })
})

app.get("/studDetail",async(req,res)=>{
    studModel.find((error,data12)=>{
        if(error)
        {
            res.send(error)
        }
        else{
            res.send(data12)
        }
    })
})

app.get("/teachDetail",async(req,res)=>{
    teachModel.find((error,data13)=>{
        if(error)
        {
             res.send(error)
        }
        else{
            res.send(data13)
        }
    })
})

app.listen(3200,()=>{console.log("server running at http://localhost:3200")})
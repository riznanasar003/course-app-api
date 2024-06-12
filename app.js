const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const {coursemodel} = require ("./models/course")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://rizna10:rizna2003@cluster0.u7ke2.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{    
    let input = req.body
    //console.log(input)
    let course = new coursemodel(input)
    course.save()
    res.json({"status":"success"})
})

app.get("/viewall",(req,res)=>{
    coursemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/search",(req,res)=>{
    let input = req.body
    coursemodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json
        }
    )
})

app.get("/delete",(req,res)=>{
    res.send("delete")
})

app.listen(8080,()=>{
    console.log("Server Started")
})
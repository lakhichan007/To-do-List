const express = require("express")
const app = express();
const todos = require("../module/schema")
const  bodyparser=require("body-parser")
app.use(bodyparser())

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", async(req, res) => {

    let datas= await todos.find();
    res.render("todo.ejs",{datas})
})
app.post("/add/new", async (req, res) => {
    try {
 data = await todos.create(req.body)
 }
    catch (e) {
        console.log(e)
    }
    res.redirect("/")
})
app.get("/todo/complete/:id",async(req,res)=>{
 const complete= await todos.updateOne({_id:req.params.id},{status:true})
 res.redirect("/")
})

app.get("/todo/delete/:id",async(req,res)=>{
    await todos.deleteOne({_id:req.params.id})
    res.redirect("/")
})

app.listen(3000, () => {
    console.log("server is running at 3000 !")
})
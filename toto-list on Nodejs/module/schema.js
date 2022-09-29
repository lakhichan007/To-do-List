const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/todo",{})
.then(()=>{
    console.log("sucessfully connected with MongoDB")
}).catch((e)=>{
    console.log(e)
})
const schema = mongoose.Schema;
const todoSchema= new schema({
    name:{type:String,required:true},
    status:Boolean
})

const todos= mongoose.model("todo",todoSchema);
module.exports=todos;

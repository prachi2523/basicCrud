const bodyparser = require('body-parser')
const express = require('express')
const req = require('express/lib/request')
const app = express();
const port = 5000;
const crudSchema = require('./model/crudSchema')
const user = require('./router/userRouter')

app.use(bodyparser.urlencoded({ extended: false }))

app.use(bodyparser.json());

require("./model/config");

app.use('/',user)




// const { response } = require('express');
// mongoose.set("strictQuery", false);

// mongoose.connect("mongodb://127.0.0.1:27017/crud", {
//     useNewUrlParser: "true",
// });
// mongoose.connection.on("error", (err) => {
//     console.log("mogoose connection error", err);
// });

// mongoose.connection.on("connected", (err, res) => {
//     console.log("mongoose is connected");
// });
// app.get("/",function(req,res){
//     return res.send({msg:"welcome in node js sen development"})
// })

// app.get("/detail",function(req,res){
//     res.send(
//         {
//             msg:"hey this is detail page"
//         }
//     )
// })

// app.post("/create",function(req,res){
//     console.log(req.body);
//     const {name,email} =req.body
//     console.log(name,email);
//     res.send({
//         msg:"hey this is create api",
//     })
// })

// app.patch("/update",function(req,res){
//     res.send({
//         msg:"this is update api",
//     }
//     )
// })
// app.put("/put",function(req,res){
//     res.send({
//         msg:"this is put api",
//     })
// })
// app.post("/add", async (req, res) => {
//     console.log(req.body);
//     const cruddata = new crudSchema({
//         Name: req.body.Name,
//         Email: req.body.Email,
//         sub: req.body.sub,
//     });

//     try {
//         const addres = await cruddata.save();
//         res.json({
//             status: "successfull",
//             data: addres
//         });

//     }
//     catch (err) {
//         res.send({
//             status: "failure",
//             message: "err_occured" + err.message
//         });

//     }
// })

// app.get("/",async (req,res)=>{
//     try{
//         console.log("get request");
//         const cruddata= await crudSchema.find();
// res.json(crud)
//     }
//  catch(err){
//        res.send{
//            staus:"failure",
//             message:"err"+err.message
//        }
// }
// })

// app.patch("/update/:id", async(req,res)=>{
//     console.log(req.params.id);
//     try{
//         const crud =await crudSchema.findByIdAndUpdate(req.params.id,req.body,{
//             new :true,
//             runValidators:true,
//         });
//         res.json(crud);
//     }
//     catch(err){
//         res.send("error "+err)
//     }
// })

// app.use('/',user)




app.listen(5000, () => {
    console.log(`Server on ${port}`);
})
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express();

app.use(cors());
app.use(bodyParser.json());
const url = 'mongodb+srv://paramuditha:pramuditha@cluster0.kdwxtur.mongodb.net/';
const port = 3000;

async function connectDB(url , connectionParams){
    
    await mongoose.connect(url , connectionParams);
    
    // console.log("DB Connected");
}

// connectDB(url);
connectDB(url , {}).then(()=>{

 console.log("Database Connected");
 app.listen(port , ()=>{
     console.log("Listening on port 3000");
 });
}).catch((err)=>{
 console.error('Connection Error',err);
})


app.get('/' , (req , res)=>{
    res.send("Hello World")
})




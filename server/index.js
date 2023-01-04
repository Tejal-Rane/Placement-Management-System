const express = require('express')
const app  = express()
const profileRoute=require('./routes/profileRoute')
const cors=require('cors')
const mongoose = require('mongoose')
require('dotenv').config
app.use(express.json({limit: '50mb'}))
app.use(cors())


const url = `mongodb+srv://TejalR:Tejal2806@cluster0.s9wpjms.mongodb.net/PlacementSystem?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
.then(()=>
{
    console.log("connection success");
})
.catch((err)=>
    {
        console.error(
            {
                message:"connection failed" +err.message
            }
        );
    }
)

app.use('/',profileRoute)
const port=process.env.PORT || 8080;
app.listen(port)
console.log(`server is running on ${port}`);
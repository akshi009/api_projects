import mongoose from 'mongoose';
import express from 'express'

//use to define routes
const app= express()

//port for the server to know from where to listen for request
const PORT = 3000;

app.use(express.json()); //to parse JSON data

//mongoose connection
mongoose.connect('mongodb+srv://akshi20jain03:niXKH4b2LEX0aYea@learnings.baxbn3r.mongodb.net/count_db').then(()=>console.log('mongodb connected')).catch((err)=>console.log('mongodb err: ',err))

//user schema
 const userSchema = new mongoose.Schema({
  count:{
    type:Number,
    required:true
  }
 })

 //created a model
 const User = mongoose.model("numbers",userSchema)

 app.get('/getdata',async(req,res)=>{
  try {
    const user=await User.find() //to get all users
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
 })


 app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)})
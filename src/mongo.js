import mongoose from 'mongoose';
import express from 'express'

//use to define routes
const app= express()

//port for the server to know from where to listen for request
const PORT = 3000;

app.use(express.json()); //to parse JSON data

//mongoose connection
mongoose.connect("mongodb://localhost:27017/admin").then(()=>console.log('mongodb connected')).catch((err)=>console.log('mongodb err: ',err))

//user schema
 const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    
  },
  email:{
    type:String,
    required:true,
    unique:true
  }

 })

 //created a model
 const User = mongoose.model("name",userSchema)

 app.get('/name',async(req,res)=>{
  try {
    const user=await User.find() //to get all users
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
 })
 app.get('/name/:id',async(req,res)=>{
  try {
    const id=req.params.id;
    const user=await User.findById(id) //to get by id
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
 })

 app.get('/email/:email', async (req, res) => {
  try {
    const email = req.params.email;
   

    const user = await User.find({ email });
    

    res.json(user);
  } catch (error) {
    console.error('Fetch error:', error); // Log error
    res.status(500).json({ error: 'Failed to fetch users by email' });
  }
});


 app.post('/post',async(req,res)=>{
try {
  const userdata = {
    name:req.body.name,
    age:req.body.age,
    email:req.body.email
  }
  const newuser = User(userdata)
  const savedata = await newuser.save()
  res.status(201).json(savedata); 
} catch (error) {
  res.status(500).json({ error: 'Failed to post users' });
}
 })


 app.put('/update/:id',async(req,res)=>{
  try {
    const id=req.params.id
    const updatedata=req.body

    const updateuser = await User.findByIdAndUpdate(id,updatedata,{ new: true, runValidators: true });
    res.json(updateuser)
    
  } catch (error) {
    res.status(500).json({error:'fail to update'})
  }
 })


 app.delete('/delete/:id',async(req,res)=>{
  try {
    const id=req.params.id
    const deleteuser=await User.findByIdAndDelete(id)
    res.status(200).json({message:'user deleted sucessfully',deleteuser})
  } catch (error) {
    res.status(500).json({error:'error in delete'})
  }
 })

 app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)})

import mongoose from "mongoose";
import express from 'express'


const app = express()
const PORT = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://akshi20jain03:niXKH4b2LEX0aYea@learnings.baxbn3r.mongodb.net/count_db').then(()=>console.log('mongo connected')).catch((err)=>console.log('mongodb err: ',err))

    

const Countschems=new mongoose.Schema({
  count:{
    type:Number,
    required:true
  }
 })



const CountValue = mongoose.model("numbers",Countschems)

// console.log (CountValue.find())

app.get('/getdata',async(req,res)=>{
    try {
        console.log('andar')
        const data= await CountValue.find()
        res.json(data)
        
    } catch (error) {
        res.status(500).json({error:'error from get'})
    }
})

app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)})



//claude

// import express from 'express';
// import { MongoClient } from 'mongodb';

// const app = express();
// const PORT = 3000;

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbName = 'count';

// // Connect to MongoDB
// async function startServer() {
//   try {
//     // Connect to MongoDB
//     await client.connect();
//     console.log('Connected to MongoDB server');
    
//     const db = client.db(dbName);
    
//     // List all collections to verify
//     const collections = await db.listCollections().toArray();
//     console.log('Available collections:', collections.map(c => c.name));
    
//     // Setup Express routes
//     app.use(express.json());
    
//     // Health check endpoint
//     app.get('/', (req, res) => {
//       res.status(200).json({ message: 'Server is running' });
//     });
    
//     // Get data endpoint
//     app.get('/getdata', async (req, res) => {
//       try {
//         console.log('Attempting to fetch data...');
        
//         // Use the exact collection name from your screenshot
//         const collection = db.collection('count_number');
        
//         // Find all documents
//         const data = await collection.find({}).toArray();
//         console.log('Found data:', data);
        
//         if (data.length === 0) {
//           return res.status(200).json({ message: 'No data found' });
//         }
        
//         return res.status(200).json(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         return res.status(500).json({ error: 'Failed to retrieve data' });
//       }
//     });
    
//     // Start Express server
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
    
//   } catch (error) {
//     console.error('Failed to start server:', error);
//     process.exit(1);
//   }
// }

// // Start the server
// startServer();
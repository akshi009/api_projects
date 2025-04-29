
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[data,setData]=useState('')
  
  
  const getdata=async()=>{
    
    try {
      //  const res = await fetch('https://icanhazdadjoke.com/',{
      //   method:"GET",
      //   headers:{
      //     'Accept':'application/json',
      //   },
      //   redirect:'follow'
      //  }).then((data)=>data.json())

      //  console.log(res.joke)

      axios.get('https://icanhazdadjoke.com/',
       { headers:{
        'Accept':'application/json',
       }}
      ).then((res)=>{setData(res.data.joke)})
      
    } catch (error) {
      console.log("Cant get the data ",error)      
    }
  }
  
  useEffect(()=>{
    getdata()
  },[])

  return (<>
    <h2 style={{marginBottom:'80px', color:'gray' }}>You really want to suffer DAD JOKES??</h2>
    <button onClick={()=>getdata()} style={{fontSize:'20px'}}>Don't Click</button>
    <div style={{margin:'40px',fontFamily:'cursive',fontSize:'50px'}}>{data||'NO DAD JOKES YET'}</div>
    </>
  )
}

export default App

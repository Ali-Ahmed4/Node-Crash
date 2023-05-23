const redis = require("ioredis");
const express = require("express")
const axios = require("axios")
const host = '127.0.0.1'
const port = '6379'
const app = express()

app.use(express.json())


/* const client = redis.createClient({host,port}); */



/* const getRedis =  async (key) => {

  const response = await client.get(key)

  if(response == null)
  {
    return null
  }

  return response

} */

const setRedis =  async (req,res) => {
  const { content } = req.body

  /* const get =  await getRedis(content) */
 
  if(get?.length > 0)
  {
    res.status(200).json(JSON.parse(get))
  }
  else 
  {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/${content}`)
    
    /* const cachedContent = await client.set(content, JSON.stringify(response.data), "EX","40") */

    res.status(200).json({content: response.data})
/* 
    fetch(`http://jsonplaceholder.typicode.com/${content}`)
    .then((response) => response.json())
    .then( async (jsonData) => {
      
     const cachedContent = await client.set(content, JSON.stringify(jsonData), "EX","40")

     res.status(200).json({content: jsonData})

    }) */
  }
  
  
}



/* app.get("/",getRedis) */
app.post("/",setRedis)


app.listen(3000, () => console.log("app working"))


  


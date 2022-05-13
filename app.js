const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req,res)=>{
	console.log('request start')
	console.log('Se creo el Segundo Commit')
	res.send('App Get , ok \n')
})

app.listen(port,()=>{
	console.log(`Server Listen on Port: ${port}`)
})

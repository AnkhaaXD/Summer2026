const express = require('express')
const app = express()
const PORT = 8383

let data = ["James"];

//middleware
app.use(express.json())

app.get('/', (req, res) => {
   res.send(`
    <body style="background:pink;
    color: blue;">
    <h1>HomePage</h1>
    <a href ="/dashboard">Dashboard</a>
    <h2>DATA:</h2>
    <p>
    ${JSON.stringify(data)}
    </p>
    </body>
    <script>
    console.log("script")
    </script>`)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
        <h1>Dashboard</h1>
        <a href="/">HomePage</a>
        </body>`)
})
app.get('/api/data', (req,res) => {
    console.log('this is for data')
    res.send(data)
})

app.post('/api/data', (req,res)=>{
    const newEntry = req.body
    data.push(newEntry.name)
    console.log(newEntry)
    res.sendStatus(201)
})

app.delete('/api/data', (req,res)=>{
    data.pop()
    console.log('deleted last entry')
    res.sendStatus(203)
})

app.listen(PORT, ()=> console.log(`Server has started on ${PORT}`))
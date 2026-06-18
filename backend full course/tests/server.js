const express = require('express')
const app = express()
const PORT = 8383

app.get('/', (req, res)=>{
    res.send("HI")
})


app.listen(PORT, () => console.log(`port open on ${PORT}`))
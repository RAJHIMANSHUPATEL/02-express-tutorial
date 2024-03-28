const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'))

// app.get('/', (req,res)=> {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     adding to static assets
//     server side rendering
// })

app.all('*', (req, res) => {
    res.status(404).send("404 Not Found")
})

app.listen(5000, () => {
    console.log("Server listening on port 5000")
})
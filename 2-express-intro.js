const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('user hit the resourse')
    res.send("Home Page")
})

app.get('/about', (req, res) => [
    res.send("About Page")
])

app.all('*', (req, res) => {
    res.status(404).send("<h1>Resourse Not Found</h1>")
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})



// app.get
// app.post
// app.put
// app.delete
// app.all -- handles all http verbs
// app.use -- used for middleware
// app.listen
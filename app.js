const http = require('http');
const { connected } = require('process');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text'})
        res.end('<h1>Home Page</h1>')
    }
    
})

server.listen(5000, () => {
    console.log("Server listening on port 5000")
})
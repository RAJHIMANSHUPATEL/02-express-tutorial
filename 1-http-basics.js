const http = require('http');
const { connected } = require('process');
const { readFileSync, read, readFile } = require('fs')

const server = http.createServer((req, res) => {
    const homePage = readFileSync('./navbar-app/index.html')
    const homeStyles = readFileSync('./navbar-app/styles.css')
    const homeImage = readFileSync('./navbar-app/logo.svg')
    const homeLogic = readFileSync('./navbar-app/browser-app.js')
    const url = req.url;
    //home page 
    console.log(url)
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    else if (url === '/about') {
        res.writeHead(200, { "content-type": 'text/html' })
        res.write("<h1>Welcome to about page</h1>")
        res.end()
    }
    //About page
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles)
        res.end()
    }
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/js' })
        res.write(homeLogic)
        res.end()
    }
    //404
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page not found!</h1>')
        res.end()
    }

})

server.listen(5000)
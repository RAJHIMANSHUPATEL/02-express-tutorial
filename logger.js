const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    // res.send("Testing")
    // Either send your own response or pass it on to the next middleware
    next()
}

module.exports = logger
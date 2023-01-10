const http = require('http')
const fs = require('fs')
const port = 2900
const server = http.createServer((req, res) => {
    fs.readFile('index.html', function(err,data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    })
})
server.listen(port, () => {
    console.log(`servidor aberto na porta: ${port}`)
})
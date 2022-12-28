const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const fsPromises = require('node:fs/promises')

const emitEvent = require('../emit')

const eventEmitter = require('events')
class Emitter extends eventEmitter { }
const myEmitter = new Emitter()

const PORT = process.env.PORT || 3500
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
})

server.listen(PORT, () => console.log(`Server running on: ${PORT}`))
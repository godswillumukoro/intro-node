const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const path = require('path')
const fileSystemPromises = require('node:fs/promises')
const fileSystem = require('node:fs')

const logEvents = async (msg, logName) => {
    const currentDate = `${format(new Date(), 'ddMMyyy\tHH:mm:ss')}`
    const logItem = `${currentDate}\t${uuid()}\t${msg}\n`
    console.log(logItem)
    try {
        if(!fileSystem.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fileSystemPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }

        await fileSystemPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem)
    } catch (err) {
        console.error(err)
    }
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'requestLogs.txt')
    console.log(`${req.method} ${req.path}`)
    next()
}

module.exports = {logger, logEvents}
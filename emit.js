const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const path = require('path')
const fileSystemPromises = require('node:fs/promises')
const fileSystem = require('node:fs')

const emitEvent = async (msg) => {
    const currentDate = `${format(new Date(), 'ddMMyyy\tHH:mm:ss')}`
    const logItem = `${currentDate}\t${uuid()}\t${msg}\n`
    console.log(logItem)
    try {
        if(!fileSystem.existsSync(path.join(__dirname, 'logs'))) {
            await fileSystemPromises.mkdir(path.join(__dirname, 'logs'))
        }

        await fileSystemPromises.appendFile(path.join(__dirname, 'logs', 'log.txt'), logItem)
    } catch (err) {
        console.error(err)
    }
}

module.exports = emitEvent
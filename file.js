const fileSystem = require('node:fs/promises')
const path = require('node:path')

const fileOperations = async () => {

    try {
        const bookData = await fileSystem.readFile(path.join(__dirname, 'foods.md'), { encoding: 'utf8' })
        
        await fileSystem.writeFile(path.join(__dirname, 'note.md'), bookData)
        await fileSystem.appendFile(path.join(__dirname, 'note.md'), bookData)
        await fileSystem.rename(path.join(__dirname, 'note.md'), path.join(__dirname, 'notes.md'))
        await fileSystem.unlink(path.join(__dirname, 'foods.md'))

        console.log('Successful. ');
    } catch (err) {
        console.error(err);
    }
}

fileOperations()
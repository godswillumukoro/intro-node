const fs = require('fs')

const rs = fs.createReadStream('./docs/largeText.md')
const ws = fs.createWriteStream('./docs/copyText.md')

// rs.on('data', (chunks) => {
//     ws.write(chunks)
// })

rs.pipe(ws)
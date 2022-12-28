const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3500

// custom middleware
app.use(logger)
// cross origin resource sharing
const whitelist = ['https://www.google.com', 'http://localhost:3500']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// built-in middleware
app.use(express.static(path.join(__dirname, '/public')))

app.use('/blog', require('./routes/subdir'))

// regex
app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about-us(.html)?', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})

// redirect url
app.get('/about(.html)?', (req, res) => {
    res.redirect(301, './about-us')
})

// default redirects
app.all('*', (req, res) => {
    res.status(404)

    if (req.accepts('html')) {
        res.sendFile('./views/404.html', { root: __dirname })
    } else if (req.accepts('json')) {
        res.json({
            error: "404. Not found"
        })
    } else {
        res.type('txt').send("404. Not found")
    }
})

// error handler
app.use(errorHandler)

app.listen(PORT, () => console.log('App running on:' + PORT))
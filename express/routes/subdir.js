const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'blog', 'index.html'))
})

router.get('^/$|/how-to-build-a-calculator(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'blog', 'how-to-build-a-calculator.html'))
})

module.exports = router
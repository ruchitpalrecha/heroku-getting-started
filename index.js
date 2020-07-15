const express = require('express')
const path = require('path')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World');
})

app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .listen(port, () => console.log('Listening on port:', port))
const express = require('express')
const ejs = require('ejs')


const indexRoute = require('./routes/index')

const app = express()

app.use('/',indexRoute)
app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')
app.use('/assets',express.static('public'))
app.use('/public',express.static('public'))
app.use('/js',express.static('public/js'))



app.listen(process.env.PORT||3000)
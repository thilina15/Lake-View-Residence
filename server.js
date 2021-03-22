const express = require('express')
const ejs = require('ejs')


const indexRoute = require('./routes/index')

const app = express()

app.use('/',indexRoute)
app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')



app.listen(process.env.PORT||3000)
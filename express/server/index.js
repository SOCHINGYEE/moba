const express = require('express')

const app = express()
app.set('secret','zheshijiamidrenzhenyaoshi')
app.use(express.json())
app.use(require('cors')())

app.use('/admin',express.static(__dirname + '/admin'))
app.use('/web',express.static(__dirname + '/web'))
app.use('/uploads',express.static(__dirname + '/uploads'))

require('./routes/admin/index')(app)
require('./plugins/db')(app)

require('./routes/web/index')(app)


app.listen(3000, () => {
    console.log('正在监听3000端口')
})
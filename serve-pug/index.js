const express = require('express')
const app = express()
const port = 3000



app.set('view engine','pug')

app.get('/', (req, res) => {
    res.render('index',{name:"Gunnar",phone:"52462523",title:"Lead Brand"})
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
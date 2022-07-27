const express = require('express')
const app = express()
const weatherRoutes = require('./routes/weather')
app.use('/public', express.static(process.cwd() + '/public'));

app.use('/weather',weatherRoutes )

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});








app.get('*', (req, res) => {
    res.send('Page not found')
})
const Port = 3000

app.listen(Port, () => {
    console.log(`${Port}`)
})

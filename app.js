var express = require('express');

var app = express();


app.get('', (req, res, next) => {
    res.send({
        message: "Hello World"
    });
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listen port ${PORT}`)
})
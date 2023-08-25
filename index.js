const express = require('express');
const app = express()
const port = 3000

app.get('/',(req,res) => {
    var a =1;
    var b = 2;
    var c = b + a +8;
    return res.send('Hello!');
})
app.listen(port,() => console.log(`Example app listening at http://localhost:${port}`));

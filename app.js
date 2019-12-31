const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res)=> res.send('<h2>Comming Soon <p>Jotonia Logistics<p><h2>'));

app.listen(port, () => console.log('This app is listening on port ' + port));
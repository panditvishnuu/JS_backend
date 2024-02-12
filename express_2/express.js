const express = require('express');

const app = express();

const port = 4000;

app.set("view engine", "ejs");
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render("dating");
})

app.listen(port, () => {
    console.log(`port is listening on ${port}`);
})


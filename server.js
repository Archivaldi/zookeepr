const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const { animals } = require('./data/animals');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.get("*", (req,res) => {
    res.redirect("/");
})


app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});
const path = require('path');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();


app.use(express.json());
app.use(expressLayouts);
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', express.static(path.join(__dirname, 'docs')));

const homeRoutes = require('./routes/home-routes');
app.use('/',homeRoutes);




const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
});
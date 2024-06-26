const express = require('express');
const app = express();
const contactRouter = require('./routers/contactRouter');
const hbs = require('express-handlebars').create({
    extname: '.hbs',
    helpers: {
        goBack: () => 'window.location.href = \'/\''
    }
});
const port = 3000;
const bodyParser = require('body-parser');

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/', contactRouter);

app.listen(process.env.PORT || port, () => {
    console.log(`http://localhost:${port}`);

});



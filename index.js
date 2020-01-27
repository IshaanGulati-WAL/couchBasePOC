require('dotenv').config();

const app = require('express')();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

const { PORT } = process.env;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Listening on port ' + PORT);
    }
});


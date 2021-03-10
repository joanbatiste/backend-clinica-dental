//Requerimos express, el router y los datos de la base de datos
const express = require('express');
const cors = require('cors');
const router = require('./router');
const db = require('./db');


const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(router);

db.then(() => {
    app.listen(port, () => {
        console.log(`Server app listening at http://localhost:${port}`);
    })
}).catch(console.log)

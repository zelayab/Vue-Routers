//codigo en express para el servidor
const express = require('express');
// creo una variable
const app = express();

const port = 3000;

// creo una ruta
/* app.get('/', (req, res) => {
    res.send('Hello World!');
}); */

// creo un servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);

//creo use para que devuelva los archivos que yo quiera
app.use(express.static('dist'));

// Path: package.json

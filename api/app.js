const express = require('express');
const app = express();
const path = require('path');
const port = 300

// Ruta principal
app.use('/', express.static(path.join(__dirname, 'main/')));

app.use('/tierra', express.static(path.join(__dirname, '/tierra')));
app.use('/nene', express.static(path.join(__dirname, '/main')));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});

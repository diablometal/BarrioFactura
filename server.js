const express = require('express');
const path = require('node:path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('BarrioShare disponible en http://localhost:3000');
});
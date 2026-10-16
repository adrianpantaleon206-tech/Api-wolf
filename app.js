require('dotenv').config();

const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'La API está funcionando' });
});

const port = Number(process.env.APP_PORT) || 3000;

app.listen(port, () => {
  console.log(`API iniciada en el puerto ${port}`);
});
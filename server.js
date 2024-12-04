// Importation des modules nécessaires
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route de base
app.get('/', (req, res) => {
  res.send('Hello World from Node.js on Azure App Service!');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

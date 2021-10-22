// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const clientPath = path.join(__dirname, './');

app.use(express.static(clientPath));

// Routes

app.get('/', function(req, res){
  res.sendFile(path.join(clientPath, './index.html'));
});

if (!module.parent) {
  app.listen(PORT, function () {
    console.log(`Weather app listening on port ${PORT}!`);
  });
}

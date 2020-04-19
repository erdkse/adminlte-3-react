const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, 'dist');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up!');
});

const express = require('express')
const app = express();
const port = 3000;
Math.floor(Date.now() / 1000);
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.listen(port, () => {
  console.log(`GH app listening on port ${port}!`)
});
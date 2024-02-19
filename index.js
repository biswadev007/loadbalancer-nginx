const express = require('express');
const app = express();
const PORT = process.env.PORT;

if(!PORT) {
  throw new Error('PORT not provided!');
}

app.get('/', (req, res) => {
  const data = `Server running at PORT:${PORT}`;
  return res.send(data);
});

app.listen(PORT, '0.0.0.0', () => console.log(`Server running successfully on PORT=${PORT}`));

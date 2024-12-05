const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Password Generator is running!');
});

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});

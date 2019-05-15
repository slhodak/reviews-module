const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(3010, () => {console.log('Reviews module server listening on port 3010!')});
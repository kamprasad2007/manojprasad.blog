const path = require('path');
const express = require('express');
const app = express(),
            DIST_PATH = __dirname,
            HTML_FILE = path.join(DIST_PATH, 'index.html');

app.use(express.static(DIST_PATH));

app.get('*', (req, res) => {
    res.sendfile(HTML_FILE);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
})
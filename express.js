const express = require('express');
const app = express();
app.get('/url', (req, res) => {
    if (req.query != null)
        res.send(req.query.name)
    else
        res.send('hello')
})
const getRouter = require('./router/router')
app.use('/api', getRouter);
app.listen(80, () => {
    console.log('hello node')
})
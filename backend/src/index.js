require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const {setupWebsocket} = require('./websocket');


const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(process.env.MONGO_DB_CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.json({message: 'Oi eu sou o goku'});
});

console.log('running');
server.listen(3333);

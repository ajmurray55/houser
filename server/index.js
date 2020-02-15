require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB CONNECTED!')
}).catch(err => console.log(err))

// HOUSE ENDPOINTS
app.get('/api/houses', ctrl.getAll)
app.post('/api/house', ctrl.addOne)
app.delete('/api/house/:id', ctrl.delete)



app.listen(SERVER_PORT, () => console.log(`RUNNING ON SERVER PORT ${SERVER_PORT}`))
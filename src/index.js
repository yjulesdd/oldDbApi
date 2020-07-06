const envConfig = require('dotenv').config();
const express = require('express');
const app = express();

import bodyParser from 'body-parser';


app.use(bodyParser.json());

//initiate router in my app

//--------------------------------------------------------------------------------------------

//get env key
if(envConfig.error){
    throw 'there is an error' + envConfig.error
}
const envKeys = envConfig.parsed;
//---------------------------------------------------------------------------------------------


const x = require('./config/routeConfig')(app);


app.listen(envKeys.HOST_PORT, () => {
    console.log(`Service register running at http://${envKeys.HOST_NAME}:${envKeys.HOST_PORT}`);
})


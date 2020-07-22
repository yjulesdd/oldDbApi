const envConfig = require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser =  require('body-parser');


app.use(bodyParser.json());

//initiate router in my app

//--------------------------------------------------------------------------------------------

//get env key
if(envConfig.error){
    throw 'there is an error' + envConfig.error
}
const envKeys = envConfig.parsed;
//---------------------------------------------------------------------------------------------

app.use('/api/*',function(req, res, next) {

    debugger
    req.body.user = req.body.user.data;

    next();
})

const x = require('./config/routeConfig')(app);




app.get('/routes', async function(req, res){
    
    const routers = require('./routes')();
    debugger
    const routes = [];

    for(let router in routers){
        routers[router].routes.forEach(route => {
            route.externalLink = 
                'http://'+process.env.SERVICE_HOST+
                ':'+parseInt(process.env.SERVICE_PORT)
                +routers[router].prefix
                +route.link

            routes.push(route)
        })
    }

   
    const toRegister = {
        serviceName: process.env.SERVICE_NAME,
        serviceAddress: process.env.SERVICE_HOST,
        servicePort: parseInt(process.env.SERVICE_PORT),
        routes : routes
    }
    res.status(200);
    res.json({...toRegister});


    // debugger

    // try{
    //     debugger
    //     const registered = await axios({
    //         method: 'post',
    //         headers:{
    //             'Content-type':'application/json'
    //         },  
    //         url: process.env.GATEWAY_SERVICE_HOST+':'+ process.env.GATEWAY_SERVICE_PORT+process.env.GATEWAY_SERVICE_REGISTER_LINK,
    //         data:{
    //             ...toRegister
    //         }
    //     }).then(function(response){
    //         debugger
    //         res.json(response.data);

    //     }).catch(function(err){
    //         debugger
    //         console.log(err)
            
    //         res.status(400);
    //         res.json({error: err.response.data.error})
    //     })
    // }catch(error){
    //     debugger
    // }
    // debugger
})




app.listen(envKeys.HOST_PORT, () => {
    console.log(`Service register running at http://${envKeys.HOST_NAME}:${envKeys.HOST_PORT}`);
})


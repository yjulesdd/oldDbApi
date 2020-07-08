const companyController = require('./companyControllers')


const gatewayController = Object.freeze({
    // ...companyController
    ...factureController
});


export default gatewayController;
export {
    serviceControllers
}

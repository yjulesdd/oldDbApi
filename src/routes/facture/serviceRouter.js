const { serviceControllers } = require('../../controllers');

// const addService = {
//     name: "addService",
//     method: "post",
//     link:"/service",
//     controller: serviceControllers.postService,
//     params:{},
//     accessRightLevel: ['superAdmin'],
//     accessRightGroups: []
// }

const getAnnualExpenses = {
    name: "getAnnualExpenses",
    method: "get",
    link:"/annual-expenses",
    controller: factureControllers.getService,
    params:{},
    accessRightLevel: [],
    accessRightGroups: []
}

const getAnnualSales = {
    name: "getAnnualSales",
    method: "get",
    link:"/annual-sales",
    controller: factureControllers.getAnnualSales,
    params:{},
    accessRightLevel: [],
    accessRightGroups: []
}

const serviceRouter = {
    prefix: "/api/facture",
    routerName: "serviceRouter",
    routes:[
        addService,
        runService,
        getService,
        getServices,
        deleteService,
        updateService
    ]
}

module.exports = serviceRouter;
const { factureControllers } = require('../../controllers');

const getClientFactures = {
    name: "getClientFactures",
    method: "get",
    link:"/get-client-factures",
    controller: factureControllers.getClientFacturesController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []
}

const getClientFacturesDone = {
    name: "getClientFacturesDone",
    method: "get",
    link:"/get-client-factures-done",
    controller: factureControllers.getClientFacturesDoneController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []
}
const getClientFacturesInProgress = {
    name: "getClientFacturesInProgress",
    method: "get",
    link:"/get-client-factures-in-progress",
    controller: factureControllers.getClientFacturesInProgressController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []
}

const getClientFacturesNeverPaid = {
    name: "getClientFacturesNeverPaid",
    method: "get",
    link:"/get-client-factures-never-paid",
    controller: factureControllers.getClientFacturesNeverPaidController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []
}


const getFournisseurFactures = {
    name: "getFournisseurFactures",
    method: "get",
    link:"/get-fournisseur-factures",
    controller: factureControllers.getFournisseurExterneFacturesController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []
}

const getFournisseurFacturesDone = {
    name: "getFournisseurFacturesDone",
    method: "get",
    link:"/get-fournisseur-factures-done",
    controller: factureControllers.getFournisseurExterneFacturesDoneController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []
}

const getFournisseurFacturesInProgress = {
    name: "getFournisseurFacturesInProgress",
    method: "get",
    link:"/get-fournisseur-factures-in-progress",
    controller: factureControllers.getFournisseurExterneFacturesInProgressController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []
}

const getFournisseurFacturesNeverPaid = {
    name: "getFournisseurFacturesNeverPaid",
    method: "get",
    link:"/get-fournisseur-factures-never-paid",
    controller: factureControllers.getFournisseurExterneFacturesNeverPaidController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []
}

const getFournisseurInterneFactures = {
    name: "getFournisseurInterneFactures",
    method: "get",
    link:"/get-fournisseur-interne-factures",
    controller: factureControllers.getFournisseurInterneFacturesController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []
}

const serviceRouter = {
    prefix: "/api/facture",
    routerName: "serviceRouter",
    routes:[
        getClientFactures,
        getClientFacturesDone,
        getClientFacturesInProgress,
        getClientFacturesNeverPaid,
        getFournisseurFactures,
        getFournisseurFacturesDone,
        getFournisseurFacturesInProgress,
        getFournisseurFacturesNeverPaid,
        getFournisseurInterneFactures
    ]
}

module.exports = serviceRouter;
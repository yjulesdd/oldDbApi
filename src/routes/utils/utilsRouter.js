const { utilsControllers } = require("../../controllers")


const getUserYears = {
    name: "getUserYears",
    method: "get",
    link:"/get-user-year",
    controller: utilsControllers.getDbYearsController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []

}



const utilsRouter = {
    prefix: "/api/utils",
    routerName: "utilsRouter",
    routes:[
       getUserYears
    ]
}

module.exports = utilsRouter;
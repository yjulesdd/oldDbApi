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

const getDepensesOfYearByCompany = {
    name: "getDepensesOfYearByCompany",
    method: "get",
    link:"/get-depenses-of-year-by-company",
    controller: utilsControllers.getDepensesOfYearByCompanyController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []

}

const getGloablDepensesOfYear = {
    name: "getGlobalDepensesOfYear",
    method: "get",
    link:"/get-global-depenses-of-year",
    controller: utilsControllers.getGlobalDepensesOfYearController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []

}

const getTurnoverOfYearByCompany = {
    name: "getTurnoverOfYearByCompany",
    method: "get",
    link:"/get-turnover-of-year-by-company",
    controller: utilsControllers.getTurnoverOfYearByCompanyController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []

}

const getGlobalTurnoverOfYear = {
    name: "getGlobalTurnoverOfYear",
    method: "get",
    link:"/get-global-turnover-of-year",
    controller: utilsControllers.getGlobalTurnoverOfYearController,
    params:{},
    accessRightLevel: ['ADMIN', 'COMPTABILITE'],
    accessRightGroups: []

}


const utilsRouter = {
    prefix: "/api/utils",
    routerName: "utilsRouter",
    routes:[
       getUserYears,
       getDepensesOfYearByCompany,
       getGloablDepensesOfYear,
       getTurnoverOfYearByCompany,
       getGlobalTurnoverOfYear

    ]
}

module.exports = utilsRouter;
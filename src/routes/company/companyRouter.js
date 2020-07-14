const { companyControllers } = require('../../controllers');

// const addCompany = {
//     name: "addCompany",
//     method: "post",
//     link:"/company",
//     controller: companyControllers.postCompany,
//     params:{},
//     accessRightLevel: ['superAdmin'],
//     accessRightGroups: []
// }

const getCompany = {
    name: "getCompany",
    method: "get",
    link:"/company",
    controller: companyControllers.getCompany,
    params:{},
    accessRightLevel: [],
    accessRightGroups: []
}

const getCompanys = {
    name: "getCompanies",
    method: "get",
    link:"/companies",
    controller: companyControllers.getCompanies,
    params:{},
    accessRightLevel: [],
    accessRightGroups: []
}

// const deleteCompany = {
//     name: "deleteCompany",
//     method: "delete",
//     link:"/company",
//     controller: companyControllers.deleteCompany,
//     params:{},
//     accessRightLevel: [],
//     accessRightGroups: []
// }

// const updateCompany = {
//     name: "updateCompany",
//     method: "patch",
//     link:"/companies",
//     controller: companyControllers.patchCompany,
//     params:{},
//     accessRightLevel: [],
//     accessRightGroups: []
// }


// const companyRouter = {
//     prefix: "/api/company",
//     routerName: "companyRouter",
//     routes:[
//         addCompany,
//         getCompany,
//         getCompanys,
//         deleteCompany,
//         updateCompany
//     ]
// }

module.exports = companyRouter;
import connection from './mySqlConnexion';
import makeCompanyDa from './company/company-da';
import makeFactureDa from './facture/facture-da';
import makeUtilsDa from './utils/utils-da';

import { buildSqlRequest, executeSqlrequest } from '../helpers';

const companyDataAccess = makeCompanyDa({connection, buildSqlRequest, executeSqlrequest});
const factureDataAccess = makeFactureDa({connection, buildSqlRequest, executeSqlrequest})
const utilsDataAccess = makeUtilsDa({connection, buildSqlRequest, executeSqlrequest})


const dataAccess = Object.freeze({
    ...companyDataAccess,
    ...factureDataAccess,
    ...utilsDataAccess
})


export default dataAccess;

export { companyDataAccess, factureDataAccess, utilsDataAccess }



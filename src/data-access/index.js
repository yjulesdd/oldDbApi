import connection from './mySqlConnexion';
import makeCompanyDa from './company/company-da';
import makeFactureDa from './facture/facture-da';

import { buildSqlRequest, executeSqlrequest } from '../helpers';

const companyDataAccess = makeCompanyDa({connection, buildSqlRequest, executeSqlrequest});
const factureDataAccess = makeFactureDa({connection, buildSqlRequest, executeSqlrequest})


const dataAccess = Object.freeze({
    ...companyDataAccess,
    ...factureDataAccess
})


export default dataAccess;

export { companyDataAccess, factureDataAccess }



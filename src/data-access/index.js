import connection from './mySqlConnexion';
import makeCompanyDa from './company/company-da';
import makeFactureDa from './facture/facture-da';

import { buildSqlRequest, executeSqlrequest } from '../helpers';

const companyDataAccess = makeCompanyDa({connection});
const factureDataAccess = makeFactureDa({connection, buildSqlRequest, executeSqlrequest})





export default{
    companyDataAccess,
    factureDataAccess
}

export{ companyDataAccess, factureDataAccess }



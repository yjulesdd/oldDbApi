import connection from './mySqlConnexion';
import makeCompanyDa from './company/company-da';
import makeFactureDa from './facture/facture-da';


const companyDataAccess = makeCompanyDa({connection});
const factureDataAccess = makeFactureDa({connection})





export default{
    companyDataAccess,
    factureDataAccess
}

export{ companyDataAccess, factureDataAccess }



import makeListDbYears from './listDbYears';
import { utilsDataAccess } from '../../data-access'
import makeListGlobalDepensesOfYear from './listGlobalDepensesOfYear';
import makeListGlobalTurnoverOfYear from './listGlobalTurnoverOfYear'
import makeListDepensesOfYearByCompany from './listDepensesOfYearByCompany';
import makeListTurnoverOfYearByCompany from './listTurnoverOfYearByComapny';
import {listCompanies} from '../companyUseCases';
import {sanitizeStringForSqlDb} from '../../helpers';



const listDbYears = makeListDbYears({utilsDataAccess});
const listGlobalTurnoverOfYear = makeListGlobalTurnoverOfYear({utilsDataAccess, listCompanies, sanitizeStringForSqlDb})
const listGlobalDepensesOfYear = makeListGlobalDepensesOfYear({utilsDataAccess, listCompanies, sanitizeStringForSqlDb});
const listDepensesOfYearByCompany = makeListDepensesOfYearByCompany({utilsDataAccess, listCompanies, sanitizeStringForSqlDb});
const listTurnoverOfYearByCompany = makeListTurnoverOfYearByCompany({utilsDataAccess, listCompanies, sanitizeStringForSqlDb});




const utilsUseCases = Object.freeze({
    listDbYears,
    listDepensesOfYearByCompany,
    listTurnoverOfYearByCompany,
    listGlobalDepensesOfYear,
    listGlobalTurnoverOfYear
});

export default {
    ...utilsUseCases
};
export { 
    listDbYears , 
    listDepensesOfYearByCompany, 
    listTurnoverOfYearByCompany,
    listGlobalDepensesOfYear,
    listGlobalTurnoverOfYear
}
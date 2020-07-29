import makeGetDbYearsController from './getDbYearsController';
import { 
    listDbYears,
    listDepensesOfYearByCompany,
    listGlobalTurnoverOfYear,
    listTurnoverOfYearByCompany,
    listGlobalDepensesOfYear 
 } from '../../use-cases/utilsUseCases'
import {userExist, whereExist, foundCompanyIdAuthorized} from '../../middleware';
import makeGetDepensesOfYearByCompanyController from './getDepensesOfYearByCompanyController';
import makeGetGlobalDepensesOfYearController from './getGlobalDepensesOfYearController';
import makeGetGlobalTurnoverOfYearController from './getGlobalTurnoverOfYearController';
import makeGetTurnoverOfYearByCompanyController from './getTurnoverOfYearByComapnyController';

const getDbYearsController = makeGetDbYearsController({listDbYears, userExist, foundCompanyIdAuthorized});
const getDepensesOfYearByCompanyController = makeGetDepensesOfYearByCompanyController({listDepensesOfYearByCompany, userExist, foundCompanyIdAuthorized});
const getGlobalDepensesOfYearController = makeGetGlobalDepensesOfYearController({listGlobalDepensesOfYear, userExist, foundCompanyIdAuthorized});
const getGlobalTurnoverOfYearController = makeGetGlobalTurnoverOfYearController({listGlobalTurnoverOfYear, userExist, foundCompanyIdAuthorized});
const getTurnoverOfYearByCompanyController = makeGetTurnoverOfYearByCompanyController({listTurnoverOfYearByCompany, userExist, foundCompanyIdAuthorized})


const utilsControllers = Object.freeze({
    getDbYearsController,
    getDepensesOfYearByCompanyController,
    getGlobalDepensesOfYearController,
    getGlobalTurnoverOfYearController,
    getTurnoverOfYearByCompanyController
});

export default utilsControllers;
export { 
    
    getDbYearsController,
    getDepensesOfYearByCompanyController,
    getGlobalDepensesOfYearController,
    getGlobalTurnoverOfYearController,
    getTurnoverOfYearByCompanyController
}
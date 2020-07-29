import makeGetDbYearsController from './getDbYearsController';
import { listDbYears } from '../../use-cases/utilsUseCases'
import {userExist, whereExist, foundCompanyIdAuthorized} from '../../middleware';
import makeGetDepensesOfYearByCompanyController from './getDepensesOfYearByCompanyController';
import makeGetGlobalDepensesOfYearController from './getGlobalDepensesOfYearController';
import makeGetGlobalTurnoverOfYearController from './getGlobalTurnoverOfYearController';
import makeGetTurnoverOfYearByCompanyController from './getTurnoverOfYearByComapnyController';

const getDbYearsController = makeGetDbYearsController({listDbYears, userExist, foundCompanyIdAuthorized});
const getDepensesOfYearByCompanyController = makeGetDepensesOfYearByCompanyController({listDbYears, userExist, foundCompanyIdAuthorized});
const getGlobalDepensesOfYearController = makeGetGlobalDepensesOfYearController({listDbYears, userExist, foundCompanyIdAuthorized});
const getGlobalTurnoverOfYearController = makeGetGlobalTurnoverOfYearController({listDbYears, userExist, foundCompanyIdAuthorized});
const getTurnoverOfYearByComapnyController = makeGetTurnoverOfYearByCompanyController({listDbYears, userExist, foundCompanyIdAuthorized})


const utilsControllers = Object.freeze({
    getDbYearsController,
    getDepensesOfYearByCompanyController,
    getGlobalDepensesOfYearController,
    getGlobalTurnoverOfYearController,
    getTurnoverOfYearByComapnyController
});

export default utilsControllers;
export { 
    
    getDbYearsController,
    getDepensesOfYearByCompanyController,
    getGlobalDepensesOfYearController,
    getGlobalTurnoverOfYearController,
    getTurnoverOfYearByComapnyController
}
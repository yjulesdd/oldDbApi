import makeGetDbYearsController from './getDbYearsController';
import { listDbYears } from '../../use-cases/utilsUseCases'
import {userExist, whereExist, foundCompanyIdAuthorized} from '../../middleware';

const getDbYearsController = makeGetDbYearsController({listDbYears, userExist, foundCompanyIdAuthorized});

const utilsControllers = Object.freeze({
    getDbYearsController
});

export default utilsControllers;
export { getDbYearsController }
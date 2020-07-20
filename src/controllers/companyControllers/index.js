import  makeGetCompanies from './getCompanies';
import makeGetCompany from './getCompany';
import {userExist, whereExist, foundCompanyIdAuthorized} from '../../middleware';

import { companyUseCases }  from '../../use-cases'


const { listCompanies, listCompany } = companyUseCases;

const getCompanies = makeGetCompanies({listCompanies, userExist });
const getCompany = makeGetCompany({listCompany, userExist, whereExist, foundCompanyIdAuthorized});


const companyControllers = Object.freeze({
    getCompanies,
    getCompany
});


export default companyControllers;
export { getCompanies, getCompany };
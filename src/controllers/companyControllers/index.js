import  makeGetCompanies from './getCompanies';
import { companyUseCases }  from '../../use-cases'

const { listCompanies } = companyUseCases;
const getCompanies = makeGetCompanies({listCompanies});

const companyControllers = Object.freeze({
    getCompanies
});


export default companyControllers;
export { getCompanies };
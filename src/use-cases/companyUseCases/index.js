import {companyDataAccess} from '../../data-access';

import makeListCompanies from './listCompanies';
import makeListCompany from './listCompany'


const {find, findOne} = companyDataAccess;

const listCompanies = makeListCompanies({find});
const listCompany = makeListCompany({findOne});

export default {
    listCompanies,
    listCompany
}

export{
    listCompanies,
    listCompany
}
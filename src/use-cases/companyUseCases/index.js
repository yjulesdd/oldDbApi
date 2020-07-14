import {companyDataAccess} from '../../data-access';

import makeListCompanies from './listCompanies';


const {find} = companyDataAccess;

const listCompanies = makeListCompanies({find});

export default {
    listCompanies
}

export{
    listCompanies
}
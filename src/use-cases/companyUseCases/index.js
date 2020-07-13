import {companyDataAccess} from '../../data-access';

import makeGetCompanies from './getCompanies';


const {find} = companyDataAccess;

const getCompanies = makeGetCompanies({find});

export default {
    getCompanies
}

export{
    getCompanies
}
import {companyDataAccess} from '../../src/data-access';

import {buildSqlRequest} from '../../src/helpers/index';

describe("Company data access", function() {
    it('get all list of company', async function(){
        const res = await companyDataAccess.findAll();
        debugger
    })

    it('get by name', async()=>{
        const res = await companyDataAccess.findByName('SMH');
        debugger
        
    })

    // it('get by id', async function(){
    //     const res = await companyDataAccess.findById(2);

    //     debugger
    // })

    it('get custom', () => {
        debugger
        const req = {
            fields: []
        }
    })
})
import { factureDataAccess, companyDataAccess } from '../../../src/data-access'
import { assert } from 'chai';

describe('company data access', () => {
    it('list all company', async () => {
        const req = {};

        const res = await companyDataAccess.find(req);

        assert.isArray(res);
    })

    it('list company by name', async () => {
        const req = {
            filters:{
                where:{
                    nom_societe: 'X-COBAT'
                }
            }
        }

        const res = await companyDataAccess.find(req);
        debugger
        assert.isArray(res);

    })
})
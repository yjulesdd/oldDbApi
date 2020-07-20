import { factureUseCases } from '../../../src/use-cases'
import { assert } from 'chai';

describe('list fournisseur externe Factures never paid ', () => {

    it('list fournisseur externe  never paid factures', async () => {
        const req = {
            filters:{
                user:{
                    idsociete: [1,2,3,4,5,6,7,8,9]
                }
            }
        }

        const res = await factureUseCases.listFournisseurExterneFacturesNeverPaid(req);

        assert.isArray(res);
        
    })

})
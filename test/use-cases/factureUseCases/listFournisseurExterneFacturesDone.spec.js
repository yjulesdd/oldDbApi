import { factureUseCases } from '../../../src/use-cases'
import { assert } from 'chai';

describe('list fournisseur Externes Factures done ', () => {

    it('list fournisseur externe done factures', async () => {
        const req = {
            filters:{
                user:{
                    idsociete: [1,2,3,4,5,6,7,8,9]
                }
            }
        }

        const res = await factureUseCases.listFournisseurExterneFacturesDone(req);

        assert.isArray(res);
        
    })

})
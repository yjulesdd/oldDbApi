import { factureUseCases } from '../../../src/use-cases'
import { assert } from 'chai';

describe('list client Factures done ', () => {

    it('list client done factures', async () => {
        const req = {
            filters:{
                user:{
                    idsociete: [1,2,3,4,5,6,7,8,9]
                }
            }
        }

        const res = await factureUseCases.listClientFacturesDone(req);

        assert.isArray(res);
        
    })

})
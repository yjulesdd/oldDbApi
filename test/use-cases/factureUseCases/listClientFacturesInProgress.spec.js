import { factureUseCases } from '../../../src/use-cases'
import { assert } from 'chai';

describe('list client Factures in progress ', () => {

    it('list client in progress factures', async () => {
        const req = {
            filters:{
                user:{
                    idsociete: [1,2,3,4,5,6,7,8,9]
                }
            }
        }

        const res = await factureUseCases.listClientFacturesInProgress(req);

        assert.isArray(res);
        
    })

})
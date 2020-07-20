import { factureUseCases } from '../../../src/use-cases'
import { assert } from 'chai';

describe('list client Factures never paid ', () => {

    it('list client never paid factures', async () => {
        const req = {
            filters:{
                user:{
                    idsociete: [1,2,3,4,5,6,7,8,9]
                }
            }
        }

        const res = await factureUseCases.listClientFacturesNeverPaid(req);

        assert.isArray(res);
        
    })

})
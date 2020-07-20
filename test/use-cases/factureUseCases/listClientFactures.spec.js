import factureUseCases from "../../../src/use-cases"
import {assert} from 'chai';


describe('get client facture', () => {

    it('try to get client facture', async () => {
        const req = {
            filters:{
                user:{
                    idsociete: [ 2 , 5 , 10 ]
                }
            }
        }
        const res = await factureUseCases.listClientFactures(req);
        assert.isArray(res);


        
    });
    it('try to get client facture with fake company', async () => {
        const req = {
            filters:{
                user:{
                    idsociete: [ 25 ]
                }
            }
        }
        const res = await factureUseCases.listClientFactures(req);
        assert.isArray(res);

    })

})
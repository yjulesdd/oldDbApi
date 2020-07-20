import factureUseCases from "../../../src/use-cases"
import {assert} from 'chai';


describe('get Fournisseur interne ', () => {

    it('try to get Fournisseur interne facture', async () => {
        const req = {
            filters:{
                user:{
                    idsociete: [ 2 , 5 , 10 ]
                }
            }
        }
        const res = await factureUseCases.listFournisseurInterneFactures(req);
        assert.isArray(res);


        
    });
    it('try to get Fournisseur interne with fake company', async () => {
        const req = {
            filters:{
                user:{
                    idsociete: [ 25 ]
                }
            }
        }
        const res = await factureUseCases.listFournisseurInterneFactures(req);
        assert.isArray(res);

    })

})
import factureUseCases from "../../../src/use-cases"
import {assert} from 'chai';


describe('get Fournisseur externe ', () => {

    it('try to get Fournisseur externe facture', async () => {
        const req = {
            filters:{
                user:{
                    idsociete: [ 2 , 5 , 10 ]
                }
            }
        }
        const res = await factureUseCases.listFournisseurExterneFactures(req);
        assert.isArray(res);


        
    });
    it('try to get Fournisseur externe with fake company', async () => {
        const req = {
            filters:{
                user:{
                    idsociete: [ 25 ]
                }
            }
        }
        const res = await factureUseCases.listFournisseurExterneFactures(req);
        assert.isArray(res);

    })

})
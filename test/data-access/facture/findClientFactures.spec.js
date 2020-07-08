import {factureDataAccess} from '../../../src/data-access'
import { assert } from 'chai';


describe('find client factures', () => {
    it('try to find all client factures', async () => {
        const res = await factureDataAccess.findClientFactures();
        assert.isArray(res);
    });

    it('try to find One client factures', async () => {
        const res = await factureDataAccess.findClientFactures({
            filters:{
                where:{
                    nom_client: 'MOCTAR'
                }
            }
        });
        
        assert.isArray(res);
    });

    it('try to find client factures in 2020', async () => {
        const res = await factureDataAccess.findClientFactures({
            filters:{
                where:{
                    date:{
                        name: 'date_emission_facture',
                        start: '2020-01-01',
                        end: '2020-12-31'
                    }
                }
            }
        });
        
        assert.isArray(res);
    });

    it('try to find One client factures', async () => {
        const res = await factureDataAccess.findClientFactures({
            filters:{
                where:{
                    nom_entreprise: "PC PLUS TECHNOLOGY",
                    date:{
                        name: 'date_emission_facture',
                        start: '2020-01-01',
                        end: '2020-12-31'
                    }
                }
            }
        });
        
        assert.isArray(res);
    });


})
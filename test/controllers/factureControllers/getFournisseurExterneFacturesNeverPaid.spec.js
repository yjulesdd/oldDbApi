const { getFournisseurExterneFacturesNeverPaidController } = require("../../../src/controllers/factureControllers")
const { assert } = require("chai")



describe('get fournisseur externe facture controller test', () => {
    it('get all facture ', async () => {
        const req = {
            query:{
                filters:{
                    where:{
                        idsociete: [ 10 ],
                        date:{
                            name: 'date_emission_facture',
                            start: '2019-01-01',
                            end: '2020-07-01'
                        }
                    },
                },
                user:{
                        idsociete:[ 10 ]
                }
            }
        }


        const res = await getFournisseurExterneFacturesNeverPaidController(req);    
        assert.deepEqual(res.statusCode, 200);

        
    })
})
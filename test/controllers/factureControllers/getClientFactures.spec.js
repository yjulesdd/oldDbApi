const { getClientFacturesController } = require("../../../src/controllers/factureControllers")
const { assert } = require("chai")



describe('get client facture controller test', () => {
    it('get all client facture ', async () => {
        const req = {
            query:{
                filters:{
                    where:{
                        idsociete: [ 8 ],
                        date:{
                            name: 'date_emission_facture',
                            start: '2020-01-01',
                            end: '2020-07-01'
                        }
                    },
                },
                user:{
                        idsociete:[ 8 ]
                }
            }
        }


        const res = await getClientFacturesController(req);    

        assert.deepEqual(res.statusCode, 200);

        
    })
})
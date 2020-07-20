const { getClientFacturesController } = require("../../../src/controllers/factureControllers")
const { assert } = require("chai")



describe('get client facture controller test', () => {
    it('get all client facture ', async () => {
        const req = {
            query:{
                filters:{
                    where:{
                        idsociete: [2, 4, 6]
                    },
                    user:{
                        idsociete:[ 2 , 6 ]
                    }
                },
            }
        }

        const res = await getClientFacturesController(req)
        
        assert.deepEqual(res.statusCode, 200);

        
    })
})
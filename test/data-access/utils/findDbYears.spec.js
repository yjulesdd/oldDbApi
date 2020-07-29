import { utilsDataAccess } from '../../../src/data-access'

describe(' find db years ', function(){
    it('get db year with one parameter', async()=>{

        const request = {
            filters:{
                where:{
                    idsociete: [1,4 ]
                }
            }
        }
        const res = await utilsDataAccess.findDbYears(request);

    })
})
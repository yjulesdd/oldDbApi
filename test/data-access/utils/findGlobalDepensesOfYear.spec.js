import { utilsDataAccess } from '../../../src/data-access'

describe(' findGlobalDepensesOfYear.spec ', function(){
    it('successfully r', async()=>{

        const request = {
            filters:{
                where:{
                    idsociete: ['\"PC PLUS TECHNOLOGY\"'],
                    year: 2020
                }
            }
        }
        const res = await utilsDataAccess.findGlobalDepensesOfYear(request);

        debugger
    })
})
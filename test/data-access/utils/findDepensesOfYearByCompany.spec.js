import { utilsDataAccess } from '../../../src/data-access'

describe(' findDepensesOfYearByCompany.spec ', function(){
    it('successfully r', async()=>{

        const request = {
            filters:{
                where:{
                    idsociete: ['\"PC PLUS TECHNOLOGY\"', '\"X-COBAT\"','\"SMH\"'],
                    year: 2020
                }
            }
        }
        const res = await utilsDataAccess.findDepensesOfYearByCompany(request);

        debugger
    })
})
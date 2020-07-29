import { utilsControllers } from '../../../src/controllers';

describe('getDepensesOfYearByCompany.spec', () => {

    it('get with one value', async () => {

        const req = {
            body:{
                filters:{
                    where:{
                        idsociete: [1,2,3,4,5,6,7,8,9,10,11,12],
                        year: 2020
                    }
                },
                user:{
                    idsociete: [1,2,3,4,5,6,7,8,9,10,11,12]
                }
            }
        }

        const res = await utilsControllers.getDepensesOfYearByCompanyController(req);
        debugger
    })
})
import { companyControllers } from "../../../src/controllers";

describe('get companies controller', () => {
    it('successfully get all companies', async () => {
        const req = {
            headers: {
                ContentType: "application/json"
            },
            query:{
                filters:{
                    where:{
                        nom_societe : 'X-COBAT'
                    }
                }
            }
        }

        const res = await companyControllers.getCompanies(req);
        debugger

    })

})
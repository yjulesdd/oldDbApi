import { companyControllers } from "../../../src/controllers";
import { assert } from 'chai';

describe('get companies controller', () => {
    it('successfully get all companies', async () => {
        const req = {
            headers: {
                ContentType: "application/json"
            },
            query:{
                
                user:{
                    idsociete: [4]
                }
            }
        }

        const res = await companyControllers.getCompanies(req);
        assert.isArray(res.body.data);

    });

    it('successfully get one company by id', async () => {
        const req = {
            headers: {
                ContentType: "application/json"
            },
            query:{
                filters:{
                    where:{
                        idsociete : [11]
                    }
                },
                
                user:{
                    idsociete: [4]
                }
            }
        }

        const res = await companyControllers.getCompanies(req);
        
        assert.isArray(res.body.data);

    });

    it('successfully get companies by id', async () => {
        const req = {
            headers: {
                ContentType: "application/json"
            },
            query:{
                user:{
                    idsociete: [4, 7]
                }
            }
        }

        const res = await companyControllers.getCompanies(req);
        assert.isArray(res.body.data);

    })

})
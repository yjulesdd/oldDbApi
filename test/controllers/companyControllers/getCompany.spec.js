import { companyControllers } from '../../../src/controllers';
import { assert, expect } from 'chai';


describe('Get One company', () => {
    it('get one company with an array of multiple values', async () => {
        const req = {
            headers: {
                ContentType: "application/json"
            },
            query:{
                
                filters:{
                    where:{
                        idsociete:[2,4,6]
                    },
                },
                user:{
                    idsociete: [4,2,5]
                }
            }
        }

        try{
            await companyControllers.getCompany(req);
        }catch(e){
            
            assert.deepStrictEqual(e.message, "ne devez produire qu'une seule condition de recherche dans la clause where")
        }
        
        
    });
    it('get one company with an array of one value', async () => {
        const req = {
            headers: {
                ContentType: "application/json"
            },
            query:{
                
                filters:{
                    where:{
                        idsociete:[2]
                    },
                },
                user:{
                    idsociete: [4,2,5]
                }
            }
        }

        
        const res = await companyControllers.getCompany(req);
        
        assert.isArray(res.body.data);
         
    })

    it('get one company that user don\'t have access with an array of one value', async () => {
        const req = {
            headers: {
                ContentType: "application/json"
            },
            query:{
                
                filters:{
                    where:{
                        idsociete:[2]
                    },
                },
                user:{
                    idsociete: [4,1,5]
                }
            }
        }

        try{

            await companyControllers.getCompany(req);
        
        }catch(e){
            assert.deepStrictEqual(e.message, 'Vous ne pouvez pas rechercher cette société')
        }
        
        
    })
})
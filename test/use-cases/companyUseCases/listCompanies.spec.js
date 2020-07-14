import { companyUseCases }  from '../../../src/use-cases';
import { assert } from 'chai'

describe('get all companies', () => {
    it('successfully retreive all companies in database', async () => {
        

        const result = await companyUseCases.getCompanies();
        assert.isArray(result);
    });

    it('successfully retreive one company by name', async () => {
        

        const result = await companyUseCases.getCompanies({
            filters:{
                where:{
                   nom_societe: 'AGRI MOTORS' 
                }
            }
        });

        assert.isArray(result);
    });
    it('successfully retreive two company by name', async () => {
        

        const result = await companyUseCases.getCompanies({
            filters:{
                where:{
                   nom_societe: ['AGRI MOTORS', 'X-COBAT'] 
                }
            }
        });

        assert.isArray(result);
    })
})
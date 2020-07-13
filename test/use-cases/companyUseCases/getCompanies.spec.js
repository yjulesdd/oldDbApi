import { companyUseCases }  from '../../../src/use-cases';


describe('get all companies', () => {
    it('successfully retreive all companies in database', async () => {
        const req = {};

        const result = await companyUseCases.getCompanies();

        debugger
    })
})
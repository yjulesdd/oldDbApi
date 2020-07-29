import { utilsUseCases } from '../../../src/use-cases';

describe('listDepensesOfYearByCompany.spec', () => {

        it('lis with one value', async () => {

            const request = {
                filters:{
                    where:{
                        idsociete: [12,6],
                        year: 2020
                    }
                }
            }

            const res = await utilsUseCases.listDepensesOfYearByCompany(request);

            debugger

        })
})
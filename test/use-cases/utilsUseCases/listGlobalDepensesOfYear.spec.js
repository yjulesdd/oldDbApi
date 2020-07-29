import { utilsUseCases } from '../../../src/use-cases';

describe('listGlobalDepensesOfYear.spec', () => {

        it('lis with one value', async () => {

            const request = {
                filters:{
                    where:{
                        idsociete: [1,2,3,4,5,6,7,8,9,10,11,12],
                        year: 2020
                    }
                }
            }

            const res = await utilsUseCases.listGlobalDepensesOfYear(request);

            debugger

        })
})
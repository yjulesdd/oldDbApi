import { utilsUseCases } from '../../../src/use-cases';

describe('list db years use case test', () => {

        it('lis with one value', async () => {

            const request = {
                filters:{
                    where:{
                        idsociete: [1,2,4,5,8],
                        year: 2020
                    }
                }
            }

            const res = await utilsUseCases.listGlobalTurnoverOfYear(request);

            debugger

        })
})
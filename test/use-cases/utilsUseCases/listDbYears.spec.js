import { utilsUseCases } from '../../../src/use-cases';

describe('list db years use case test', () => {

        it('lis with one value', async () => {

            const request = {
                filters:{
                    where:{
                        idsociete: [ 6,7 ]
                    }
                }
            }

            const res = await utilsUseCases.listDbYears(request);

            debugger

        })
})
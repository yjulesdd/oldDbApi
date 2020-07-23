import { utilsControllers } from '../../../src/controllers';

describe('get db years controller', () => {

    it('get with one value', async () => {

        const req = {
            body:{
                filters:{
                    where:{
                        idsociete: [1]
                    }
                },
                user:{
                    idsociete: [1]
                }
            }
        }

        const res = await utilsControllers.getDbYearsController(req);
        debugger
    })
})
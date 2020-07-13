import factureUseCases from "../../../src/use-cases"

describe('get client facture', () => {

    it('try to get client facture', async () => {
        const req = {
            filters:{
                where:{
                    countries:['CI'],
                    companies: []
                }
            }
        }
        const res = await factureUseCases.getClientFactures(req)
    })

})
import {factureDataAccess} from '../../src/data-access';
import {buildSqlRequest} from '../../src/helpers';

describe("Facture data access", function() {
    // it('get all list of factures', async function(){
    //     const res = await factureDataAccess.findAll();
    //     debugger
    // });

    // it('get by Year', async () =>{

    //     const res = await factureDataAccess.findByYear('2019');     
    //     debugger
    // });

    // it('get by id', async function(){
    //     const res = await factureDataAccess.findById(45);

        
    // });

    it('get Factures list', async () => {
        const req = {
            filters:{
                where:{
                    nom : 'Sidibe',
                    date:{

                        name: 'date_emission',
                        start: '2020',
                        end: '2020'
                        
                    }
                }
            }
        }
        buildSqlRequest(req);
    })
})
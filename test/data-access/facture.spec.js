import {factureDataAccess} from '../../src/data-access';


describe("Facture data access", function() {
    it('get all list of factures', async function(){
        const res = await factureDataAccess.findAll();
        debugger
    });

    it('get by Year', async () =>{

        const res = await factureDataAccess.findByYear('2019');     
        debugger
    });

    it('get by id', async function(){
        const res = await factureDataAccess.findById(45);

        
    });
})
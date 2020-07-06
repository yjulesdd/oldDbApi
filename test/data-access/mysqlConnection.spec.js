import setupDb from '../../src/data-access/mySqlConnexion';
const assert = require('chai').assert;



describe('My sql connection test', function() {
    it('successfully connect to db', async function() {
        
        const con = await setupDb();
        assert.equal(con.state, "authenticated");
        
    });
})
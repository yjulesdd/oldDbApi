import {buildSqlRequest} from '../../src/helpers/index';
const assert = require('chai').assert;

describe('build sql request' ,() => {
    const req = {
        fields :[ 'nom', 'prenoms', 'age'],
        filters:{
            where:{
                nom : "Jules"
            },
            groupBy:["date"]
        }
    }

    const sql = buildSqlRequest({...req});
    assert.deepEqual(sql.request, "SELECT nom,prenoms,age WHERE `nom` = ? GROUP BY date")

})
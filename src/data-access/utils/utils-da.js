export default function utilsDa({connection, buildSqlRequest = null, executeSqlrequest = null}){

    
    async function findDbYears(request){

        debugger
        const values = request.filters.where.idsociete.join(',');
        let sql = `CALL get_years(?)`;
        const con = await connection();
        const res = await executeSqlrequest({con ,sql, values });
        
        return res[0];
       
    }


    return Object.freeze({
        findDbYears
    })
}


export default function makeCompanyDa({connection, buildSqlRequest, executeSqlrequest}){

    async function find(request){
        const con = await connection();

        const { request: sql, values} = buildSqlRequest(request, 'societe_view');
        debugger
        return await executeSqlrequest({con ,sql, values});
    }

    

    return Object.freeze({
        find
    })
}
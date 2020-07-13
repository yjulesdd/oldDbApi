

export default function makeCompanyDa({connection, buildSqlRequest, executeSqlrequest}){

    async function find(request){
        const con = await connection();

        const { request: sql, values} = buildSqlRequest(request, 'societe_view');
        return await executeSqlrequest({con ,sql, values});
    }

    

    return Object.freeze({
        find
    })
}
export default function utilsDa({connection, buildSqlRequest = null, executeSqlrequest = null}){

    
    async function findDbYears(request){

        debugger
        const values = request.filters.where.idsociete.join(',');
        let sql = `CALL get_years(?)`;
        const con = await connection();
        const res = await executeSqlrequest({con ,sql, values });
        
        return res[0];
       
    }

    async function findGlobalTurnoverOfYear(request){
   
        let sql = `CALL getTotalChiffreAffaire('${request.filters.where.idsociete}', ${request.filters.where.year})`;
        const con = await connection();
        const res = await executeSqlrequest({con ,sql});
        
        return res[0];
       
    }

    async function findTurnoverOfYearByCompany(request){

        let sql = `CALL getChiffreAffaireByCompagny('${request.filters.where.idsociete}', ${request.filters.where.year})`;
        const con = await connection();
        const res = await executeSqlrequest({con ,sql});
        
        return res[0];
       
    }

    async function findGlobalDepensesOfYear(request){

        let sql = `CALL getTotalDepenses('${request.filters.where.idsociete}', ${request.filters.where.year})`;
        const con = await connection();
        const res = await executeSqlrequest({con ,sql});
        
        return res[0];
       
    }

    async function findDepensesOfYearByCompany(request){

        let sql = `CALL getDepensesByCompany('${request.filters.where.idsociete}', ${request.filters.where.year})`;
        const con = await connection();
        const res = await executeSqlrequest({con ,sql});
        
        return res[0];
       
    }

    return Object.freeze({
        findDbYears,
        findGlobalDepensesOfYear,
        findDepensesOfYearByCompany,
        findGlobalTurnoverOfYear,
        findTurnoverOfYearByCompany
    })
}
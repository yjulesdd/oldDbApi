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

        debugger
        let sql = `CALL getTotalChiffreAffaire("${request.filters.where.idsociete}", ${request.filters.where.year})`;
        const con = await connection();
        const res = await executeSqlrequest({con ,sql});
        
        return res[0];
       
    }

    async function findTurnoverOfYearByCompany(request){

        const values = request.filters.where.idsociete.join(',');
        let sql = `CALL getChiffreAffaireByCompagny(?,?)`;
        const con = await connection();
        const res = await executeSqlrequest({con ,sql, values });
        
        return res[0];
       
    }

    async function findGlobalDepensesOfYear(request){

        const values = request.filters.where.idsociete.join(',');
        let sql = `CALL getTotalDepenses(?,?)`;
        const con = await connection();
        const res = await executeSqlrequest({con ,sql, values });
        
        return res[0];
       
    }

    async function findDepensesOfYearByCompany(request){

        const values = request.filters.where.idsociete.join(',');
        let sql = `CALL getTotalDepenses(?,?)`;
        const con = await connection();
        const res = await executeSqlrequest({con ,sql, values });
        
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
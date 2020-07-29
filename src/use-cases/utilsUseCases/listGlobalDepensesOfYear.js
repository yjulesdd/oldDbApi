export default function makeListGlobalDepensesOfYear({ utilsDataAccess, listCompanies, sanitizeStringForSqlDb }){
    return async function listGlobalDepensesOfYear({fields = [], filters = null}){

        if(!filters){
            throw new Error('You must supply a filter');
        }

        if(!filters.where || !filters.where.idsociete || filters.where.idsociete.length  <= 0){
            throw new Error('You must supply an idsociete');
        }

        const companies = await listCompanies({fields: ['nom_societe'] , filters:{ where:{ idsociete : filters.where.idsociete } }});
        filters.where.idsociete = sanitizeStringForSqlDb(companies);

        const res = await utilsDataAccess.findGlobalDepensesOfYear({fields, filters});

        return res;

    }
}
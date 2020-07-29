import { sanitizeStringForSqlDb } from "../../helpers";

export default function makeListGlobalTurnoverOfYear({ utilsDataAccess , listCompanies, sanitizeStringForSqlDb}){
    return async function listGlobalTurnoverOfYear({fields = [], filters = null}){

        if(!filters){
            throw new Error('You must supply a filter');
        }

        if(!filters.where || !filters.where.idsociete || filters.where.idsociete.length  <= 0){
            throw new Error('You must supply an idsociete');
        }

        const companies = await listCompanies({fields: ['nom_societe'] , filters:{ where:{ idsociete : filters.where.idsociete } }});
        filters.where.idsociete = sanitizeStringForSqlDb(companies);

        debugger

        const res = await utilsDataAccess.findGlobalTurnoverOfYear({fields, filters});

        return res;

    }
}
export default function makeListClientFactures({factureDataAccess, listCompanies}){
    return async function listClientFactures({fields = [], filters = {}}){

        const companies = await listCompanies({fields: ['nom_societe'] , filters:{ where:{ idsociete : filters.where.idsociete } }});

        if(companies.length <= 0){
            return [];
        }

        const companiesNames  = [];
            
        companies.forEach(element => {
            companiesNames.push(element.nom_societe.replace("'", "\\'"));
        });

        debugger


        if(! filters.where){
            filters.where = {};
        }

            delete filters.where.idsociete;
            filters.where.nom_entreprise = companiesNames;

            const res = await factureDataAccess.findClientFactures({ fields, filters });

            
            return res;
    }
}
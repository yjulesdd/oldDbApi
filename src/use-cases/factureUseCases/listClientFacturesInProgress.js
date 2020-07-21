export default function makeListClientFacturesInProgress({factureDataAccess, listCompanies}){
    return async function listClientFacturesInProgress({fields = [], filters = {}}){
      
        const companies = await listCompanies({fields: ['nom_societe'] , filters:{ where:{ idsociete : filters.where.idsociete } }});
    
        if(companies.length <= 0){
            return [];
        }
    
        const companiesNames  = [];
            
        companies.forEach(element => {
            companiesNames.push(element.nom_societe.replace("'", "\\'"));
        });
    
    
    
        if(! filters.where){
            filters.where = {};
        }
    
        delete filters.where.idsociete;
        filters.where.nom_entreprise = companiesNames;
    
            const res = await factureDataAccess.findClientFacturesInProgress({ fields, filters });
            return res;
        }
}

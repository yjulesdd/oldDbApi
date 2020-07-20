export default function makeListClientFactureDone({factureDataAccess, listCompanies}){
    return async function listClientFacturesDone({fields = [], filters = {}}){
        if(!filters.user){
            throw new Error(" Veuillez vous authentifier ")
        }
    
        const companies = await listCompanies({filters:{ where :{ idsociete : filters.user.idsociete} }});
    
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
    
        filters.where.nom_entreprise = companiesNames;
    
            const res = await factureDataAccess.findClientFacturesDone({ fields, filters });
            return res;
        }
}
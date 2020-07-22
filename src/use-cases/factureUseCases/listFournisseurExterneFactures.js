export default function makeListFournisseurExterneFactures({factureDataAccess, listCompanies}){
    return async function listFournisseurExterneFactures({fields = [], filters = {}}){
        
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
    
            const res = await factureDataAccess.findFournisseurExterneFactures({ fields, filters });
            return res;
        }
}

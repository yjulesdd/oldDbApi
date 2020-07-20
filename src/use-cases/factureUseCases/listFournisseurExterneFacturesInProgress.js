export default function makeListFournisseurExterneFacturesInProgress({factureDataAccess, listCompanies}){
    return async function listFournisseurExterneFacturesInProgress({fields = [], filters = {}}){
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
    
            const res = await factureDataAccess.findFournisseurExterneFacturesInProgress({ fields, filters });
            return res;
        }
}

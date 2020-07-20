export default function makeListFournisseurExterneFacturesNeverPaid({factureDataAccess, listCompanies}){
    return async function listFournisseurExterneFacturesNeverPaid({fields = [], filters = {}}){
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
    
            const res = await factureDataAccess.findFournisseurExterneFacturesNeverPaid({ fields, filters });
            return res;
        }
}

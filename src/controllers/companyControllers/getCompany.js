export default function makeGetCompany({listCompany, whereExist, userExist, foundCompanyIdAuthorized}){
    return async function getCompany(httpRequest){
        const headers = {
            'Content-Type':'application/json',
        }

        const { fields = {} , filters = {}, user = null } = httpRequest.query;
        
        userExist({ user })

        // Verif if where exist in filters 
        // if not instanciate return an error
       whereExist({filters})

        
        if(Array.isArray(filters.where.idsociete) && filters.where.idsociete.length > 1){
            throw new Error ('vous ne devez produire qu\'une seule condition de recherche dans la clause where')
        }
       
        const foundInAuthorizedTosee = foundCompanyIdAuthorized({user, filters});
        
        if(!foundInAuthorizedTosee){
            throw new Error ('Vous ne pouvez pas rechercher cette société');
        }

        filters.where.idsociete = foundInAuthorizedTosee;

        try{
            const data = await listCompany({fields, filters});

            return{
                headers,
                statusCode: 200,
                body: {
                    data
                }
            }
        }catch(e){
            console.log(e);
            return{
                statusCode: 400,
                body:{
                    error:e.message   
                }
            }
        }
    }
} 
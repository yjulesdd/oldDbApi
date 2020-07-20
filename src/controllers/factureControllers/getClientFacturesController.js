export default function makeGetFactureController({listClientFactures , userExist , foundCompanyIdAuthorized}){
    return async function getFactureController(httpRequest){
        
        const { fields = {} , filters = {}} = httpRequest.query;
        
        userExist({user : filters.user});
        
        const headers = {
        'Content-Type':'application/json',
        }

        let societes;
        
        if(filters.where && filters.where.idsociete){
            
            societes = foundCompanyIdAuthorized({user : filters.user, filters})
            filters.where.idsociete = societes;
        }

        debugger

        try{
            const data = await listClientFactures({fields, filters});

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
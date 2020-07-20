export default function makeGetCompanies({listCompanies, userExist }){
    return async function getCompanies(httpRequest){
        const headers = {
            'Content-Type':'application/json',
        }

        const { fields = {} , filters = {}, user = null } = httpRequest.query;
        userExist({ user });
        
        // Verif if where exist in filters 
        // if not instanciate it to an empty object
        if(!filters.where) filters.where = {}

        //add property idsociete in where object to filter exact societe user have access to 
        filters.where['idsociete'] = user.idsociete ;


        try{
            const data = await listCompanies({fields, filters});

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
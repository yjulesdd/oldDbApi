

export default function makeGetTurnoverOfYearByCompanyController({ listTurnoverOfYearByCompany , userExist, foundCompanyIdAuthorized}){
    return async function getTurnoverOfYearByCompanyController(httpRequest){
        try{
            const { fields = {} , filters = {}, user} = httpRequest.body;
          
            debugger
            userExist({user});
            
            const headers = {
            'Content-Type':'application/json',
            }
    
            let societes;
            
            if(filters.where && filters.where.idsociete && filters.where.idsociete.length > 0){
                
                societes = foundCompanyIdAuthorized({user, filters});
                filters.where.idsociete = societes;
            }else{
                filters.where = {};
                filters.where.idsociete = user.idsociete;
            }
    
    
            
    
            
            const data = await listTurnoverOfYearByCompany({fields, filters});
    
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
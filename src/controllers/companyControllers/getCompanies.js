export default function makeGetCompnanies({listCompanies}){
    return async function getServices(httpRequest){
        const headers = {
            'Content-Type':'application/json',
        }

        const { fields = {} , filters = {} } = httpRequest.query;

        try{
            const service = await listCompanies({fields, filters});

            return{
                headers,
                statusCode: 200,
                body: service
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
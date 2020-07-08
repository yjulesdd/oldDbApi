export default function makeGetClientFactures({factureDataAccess}){
    return async function getClientFactures({fields = [], filters = {}, userInfo}){
       if(!userInfo){
           throw new Error('Vous devez vous authentifier');
       }

       const res = await factureDataAccess.findClientFactures({ fields, filters });

       debugger
    }
}
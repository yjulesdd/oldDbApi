export default function makeListCompanies({find}){
    return async function listCompanies({fields = {}, filters = {} }={}){

        const request = { fields, filters }

        const res = await find(request);
        
        return res;
    }
}
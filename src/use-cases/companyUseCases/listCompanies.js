export default function makeListCompanies({find}){
    return async function listCompanies({fields = {}, filters = {} }={}){

        debugger
        const request = { fields, filters }

        const res = await find(request);
        
        return res;
    }
}
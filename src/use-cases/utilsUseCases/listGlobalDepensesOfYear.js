export default function makeListGlobalDepensesOfYear({ utilsDataAccess }){
    return async function listGlobalDepensesOfYear({fields = [], filters = null}){

        if(!filters){
            throw new Error('You must supply a filter');
        }

        if(!filters.where || !filters.where.idsociete || filters.where.idsociete.length  <= 0){
            throw new Error('You must supply an idsociete');
        }

        const res = await utilsDataAccess.findDbYears({fields, filters});

        return res;

    }
}
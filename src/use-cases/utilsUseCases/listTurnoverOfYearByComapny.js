export default function makeListTurnoverOfYearByCompany({ utilsDataAccess }){
    return async function listTurnoverOfYearByCompany({fields = [], filters = null}){

        if(!filters){
            throw new Error('You must supply a filter');
        }

        if(!filters.where || !filters.where.idsociete || filters.where.idsociete.length  <= 0){
            throw new Error('You must supply an idsociete');
        }

        const res = await utilsDataAccess.findTurnoverOfYearByCompany({fields, filters});

        return res;

    }
}
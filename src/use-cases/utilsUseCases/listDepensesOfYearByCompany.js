export default function makeListDepensesOfYearByCompany({ utilsDataAccess }){
    return async function listDepensesOfYearByCompany({fields = [], filters = null}){

        if(!filters){
            throw new Error('You must supply a filter');
        }

        if(!filters.where || !filters.where.idsociete || filters.where.idsociete.length  <= 0){
            throw new Error('You must supply an idsociete');
        }

        const res = await utilsDataAccess.findDepensesOfYearByCompany({fields, filters});

        return res;

    }
}
export default function makeListDbYears({ utilsDataAccess }){
    return async function listDbYears({fields = [], filters = null}){

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
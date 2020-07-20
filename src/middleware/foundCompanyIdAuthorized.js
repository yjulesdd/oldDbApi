export default function foundCompanyIdAuthorized({user, filters}){

    return filters.where.idsociete.filter( element => user.idsociete.includes(element));
}
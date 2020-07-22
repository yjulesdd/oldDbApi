export default function userExist({ user }){

    debugger
    if(!user || user && !user.idsociete || user.idsociete && user.idsociete.length <= 0){
        throw new Error ('Vous n\'avez pas accès à ces données');
    }
}
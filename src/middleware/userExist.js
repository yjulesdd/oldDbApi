export default function userExist({ user }){
    if(!user || user.idsociete.length <= 0){
        throw new Error ('Vous n\'avez pas accès à ces données');
    }
}
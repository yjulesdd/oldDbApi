export default function userExist({ user }){
    if(!user){
        throw new Error ('Vous n\'avez pas accès à ces données');
    }
}
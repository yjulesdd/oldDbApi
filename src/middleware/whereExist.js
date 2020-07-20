export default function whereExist({ filters }){
    if(!filters.where){
        throw new Error('Vous devez spécifier un `idsociete` dans la clause Where');
    }
}
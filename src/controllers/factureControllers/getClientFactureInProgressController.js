export default function makeGetFactureController({}){
    return async function getFactureController(httpRequest){
        const {token, ...info} = httpRequest.params;

        debugger
    }
}
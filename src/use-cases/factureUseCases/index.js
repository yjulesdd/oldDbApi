import makeGetClientFactures from './getClientFactures';

import { factureDataAccess } from '../../data-access';

const getClientFactures  = makeGetClientFactures({ factureDataAccess });


const factureUseCases = Object.freeze({
     getClientFactures
})

export default {
    ... factureUseCases
};
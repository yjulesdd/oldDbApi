import makeGetClientFactures from './getClientFactures';

import { factureDataAccess } from '../../data-access';

const getClientFactures  = makeGetClientFactures({ factureDataAccess });


const factureUseCase = Object.freeze({
    getClientFactures
})

export default factureDataAccess;
import makeGetClientFacturesController from './getClientFacturesController';
import makeGetClientFacturesInProgressController from './getClientFacturesInProgressController';

import {userExist, whereExist, foundCompanyIdAuthorized} from '../../middleware';

import { 
    listClientFactures , 
    listClientFacturesInProgress, 
    listClientFacturesNeverPaid, 
    listClientFacturesDone
} from '../../use-cases/factureUseCases';

import makeGetClientFacturesNeverPaidController from './getClientFacturesNeverPaidController';
import makeGetClientFacturesDoneController from './getClientFacturesDoneController';


const getClientFacturesController = makeGetClientFacturesController({listClientFactures , userExist, foundCompanyIdAuthorized});
const getClientFacturesInProgressController = makeGetClientFacturesInProgressController({ listClientFacturesInProgress, userExist, foundCompanyIdAuthorized})
const getClientFacturesNeverPaidController = makeGetClientFacturesNeverPaidController({listClientFacturesNeverPaid, userExist, foundCompanyIdAuthorized})
const getClientFacturesDoneController = makeGetClientFacturesDoneController({ listClientFacturesDone, userExist, foundCompanyIdAuthorized });

const factureControllers = Object.freeze({
    getClientFacturesController,
    getClientFacturesInProgressController,
    getClientFacturesNeverPaidController,
    getClientFacturesDoneController
})

export default factureControllers;

export {
    getClientFacturesController,
    getClientFacturesInProgressController,
    getClientFacturesNeverPaidController,
    getClientFacturesDoneController
}
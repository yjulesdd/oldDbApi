import makeGetClientFacturesController from './getClientFacturesController';
import makeGetClientFacturesInProgressController from './getClientFacturesInProgressController';

import {userExist, whereExist, foundCompanyIdAuthorized} from '../../middleware';

import { 
    listClientFactures , 
    listClientFacturesInProgress, 
    listClientFacturesNeverPaid, 
    listClientFacturesDone,
    listFournisseurExterneFactures,
    listFournisseurExterneFacturesDone,
    listFournisseurExterneFacturesNeverPaid,
    listFournisseurExterneFacturesInProgress,
    listFournisseurInterneFactures
} from '../../use-cases/factureUseCases';

import makeGetClientFacturesNeverPaidController from './getClientFacturesNeverPaidController';
import makeGetClientFacturesDoneController from './getClientFacturesDoneController';
import makeGetFournisseurExterneFacturesController from './getFournisseurExterneFacturesController';
import makeGetFournisseurExternesFacturesDoneController from './getFournisseurExterneFacturesDoneController';
import makeGetFournisseurExternesFacturesNeverPaidController from './getFournisseurExterneFacturesNeverPaidController';
import makeGetFournisseurExternesFacturesInProgressController from './getFournisseurExterneFacturesInProgressController';
import makeGetFournisseurInternesFacturesController from './getFournisseurInterneFacturesController';


// CLIENT FACTURES CONTROLLERS
const getClientFacturesController = makeGetClientFacturesController({listClientFactures , userExist, foundCompanyIdAuthorized});
const getClientFacturesInProgressController = makeGetClientFacturesInProgressController({ listClientFacturesInProgress, userExist, foundCompanyIdAuthorized})
const getClientFacturesNeverPaidController = makeGetClientFacturesNeverPaidController({listClientFacturesNeverPaid, userExist, foundCompanyIdAuthorized})
const getClientFacturesDoneController = makeGetClientFacturesDoneController({ listClientFacturesDone, userExist, foundCompanyIdAuthorized });


// FOURNISSEURS FACTURES CONTROLLERS
const getFournisseurExterneFacturesController = makeGetFournisseurExterneFacturesController({ listFournisseurExterneFactures , userExist, foundCompanyIdAuthorized })
const getFournisseurExterneFacturesDoneController = makeGetFournisseurExternesFacturesDoneController({ listFournisseurExterneFacturesDone, userExist, foundCompanyIdAuthorized })
const getFournisseurExterneFacturesNeverPaidController = makeGetFournisseurExternesFacturesNeverPaidController({ listFournisseurExterneFacturesNeverPaid , userExist, foundCompanyIdAuthorized })
const getFournisseurExterneFacturesInProgressController = makeGetFournisseurExternesFacturesInProgressController({ listFournisseurExterneFacturesInProgress , userExist, foundCompanyIdAuthorized })

// FOURNISSEURS INTERNE CONTROLLERS
const getFournisseurInterneFacturesController = makeGetFournisseurInternesFacturesController({ listFournisseurInterneFactures, userExist, foundCompanyIdAuthorized });



const factureControllers = Object.freeze({
    getClientFacturesController,
    getClientFacturesInProgressController,
    getClientFacturesNeverPaidController,
    getClientFacturesDoneController,
    getFournisseurExterneFacturesController,
    getFournisseurExterneFacturesDoneController,
    getFournisseurExterneFacturesNeverPaidController,
    getFournisseurExterneFacturesInProgressController,
    getFournisseurInterneFacturesController
})

export default factureControllers;

export {
    getClientFacturesController,
    getClientFacturesInProgressController,
    getClientFacturesNeverPaidController,
    getClientFacturesDoneController,
    getFournisseurExterneFacturesController,
    getFournisseurExterneFacturesDoneController,
    getFournisseurExterneFacturesNeverPaidController,
    getFournisseurExterneFacturesInProgressController,
    getFournisseurInterneFacturesController
}
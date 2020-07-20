import makeGetClientFacturesController from './getClientFacturesController';

import {userExist, whereExist, foundCompanyIdAuthorized} from '../../middleware';

import { listClientFactures } from '../../use-cases/factureUseCases';


const getClientFacturesController = makeGetClientFacturesController({listClientFactures , userExist, foundCompanyIdAuthorized});

const factureControllers = Object.freeze({
    getClientFacturesController
})

export default factureControllers;

export {
    getClientFacturesController
}
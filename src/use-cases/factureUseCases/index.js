import makeListClientFactures from './listClientFactures';
import makeListClientFacturesInProgress from './listClientFacturesInProgress';

import { listCompanies } from '../companyUseCases'
import { factureDataAccess } from '../../data-access';
import makeListFournisseurExterneFactures from './listFournisseurExterneFactures';
import makeListFournisseurExterneFacturesInProgress from './listFournisseurExterneFacturesInProgress';
import makeListFournisseurExterneFacturesNeverPaid from './listFournisseurExterneFacturesNeverPaid';
import makeListFournisseurExterneFacturesDone from './listFournisseurExterneFacturesDone';
import makeListClientFacturesNeverPaid from './listClientFacturesNeverPaid';
import makeListClientFactureDone from './listCLientFactureDone';
import makeListFournisseurInterneFactures from './listFournisseurInterneFactures';

const listClientFactures  = makeListClientFactures({ factureDataAccess , listCompanies});
const listClientFacturesInProgress = makeListClientFactures({ factureDataAccess, listCompanies});
const listClientFacturesNeverPaid = makeListClientFacturesNeverPaid({ factureDataAccess, listCompanies });
const listClientFacturesDone = makeListClientFactureDone({ factureDataAccess, listCompanies });


const listFournisseurExterneFactures =  makeListFournisseurExterneFactures({ factureDataAccess, listCompanies});
const listFournisseurExterneFacturesInProgress =  makeListFournisseurExterneFacturesInProgress({ factureDataAccess, listCompanies });
const listFournisseurExterneFacturesNeverPaid = makeListFournisseurExterneFacturesNeverPaid({ factureDataAccess, listCompanies });
const listFournisseurExterneFacturesDone = makeListFournisseurExterneFacturesDone({ factureDataAccess, listCompanies });

const listFournisseurInterneFactures = makeListFournisseurInterneFactures({ factureDataAccess, listCompanies });


const factureUseCases = Object.freeze({
     listClientFactures,
     listClientFacturesInProgress,
     listClientFacturesNeverPaid,
     listClientFacturesDone,
     listFournisseurExterneFactures,
     listFournisseurExterneFacturesInProgress,
     listFournisseurExterneFacturesNeverPaid,
     listFournisseurExterneFacturesDone,
     listFournisseurInterneFactures
})

export default {
    ... factureUseCases
};
export {
        listClientFactures,
     listClientFacturesInProgress,
     listClientFacturesNeverPaid,
     listClientFacturesDone,
     listFournisseurExterneFactures,
     listFournisseurExterneFacturesInProgress,
     listFournisseurExterneFacturesNeverPaid,
     listFournisseurExterneFacturesDone,
     listFournisseurInterneFactures
}
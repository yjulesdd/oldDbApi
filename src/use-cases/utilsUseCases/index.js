import makeListDbYears from './listDbYears';
import { utilsDataAccess } from '../../data-access'


const listDbYears = makeListDbYears({utilsDataAccess});

const utilsUseCases = Object.freeze({
    listDbYears
});

export default {
    ...utilsUseCases
};
export { listDbYears }
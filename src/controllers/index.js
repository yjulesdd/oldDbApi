import companyControllers from './companyControllers';
import factureControllers from './factureControllers'
import utilsControllers from './utilsControllers';

const gatewayController = Object.freeze({
    ...companyControllers,
    ...factureControllers,
    ...utilsControllers
});


export default gatewayController;
export {
    companyControllers,
    factureControllers,
    utilsControllers
}

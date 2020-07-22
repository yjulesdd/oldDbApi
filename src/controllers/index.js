import companyControllers from './companyControllers';
import factureControllers from './factureControllers'


const gatewayController = Object.freeze({
    ...companyControllers,
    ...factureControllers
});


export default gatewayController;
export {
    companyControllers,
    factureControllers
}

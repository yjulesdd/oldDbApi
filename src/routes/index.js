const companyRouter = require('./company/companyRouter');
const factureRouter = require('./facture/factureRouter');
const utilsRouter = require('./utils/utilsRouter');

module.exports = () => {
    return {
        companyRouter,
        factureRouter,
        utilsRouter
    }
}
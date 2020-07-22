const companyRouter = require('./company/companyRouter');
const factureRouter = require('./facture/factureRouter')

module.exports = () => {
    return {
        companyRouter,
        factureRouter
    }
}
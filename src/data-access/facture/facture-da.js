
export default function factureDa({connection, buildSqlRequest, executeSqlrequest}){

    async function findClientFactures(request){

        const con = await connection();
        const { request: sql, values} = buildSqlRequest(request, 'facture_client_view');
        return await executeSqlrequest({con ,sql, values});
        
    }

    async function findClientFacturesInProgress(request){

        const con = await connection();
        const { request: sql, values} = buildSqlRequest(request, 'facture_client_paiement_en_cours_view');
        return await executeSqlrequest({con ,sql, values});
        
    }

    async function findClientFacturesDone(request){

        const con = await connection();
        const { request: sql, values} = buildSqlRequest(request, 'facture_client_paiement_termine_view');
        return await executeSqlrequest({con ,sql, values});
        
    }

    async function findClientFacturesNeverPaid(request){

        const con = await connection();
        const { request: sql, values} = buildSqlRequest(request, 'facture_client_sans_paiement_view');
        return await executeSqlrequest({con ,sql, values});
        
    }



    async function findFournisseurExterneFactures(request){

        const con = await connection();
        const { request: sql, values} = buildSqlRequest(request, 'facture_fournisseur_view');
        return await executeSqlrequest({con ,sql, values});
        
    }

    async function findFournisseurInterneFactures(request){

        const con = await connection();
        const { request: sql, values} = buildSqlRequest(request, 'facture_interne_view');
        return await executeSqlrequest({con ,sql, values});
        
    }

    async function findFournisseurExterneFacturesInProgress(request){

        const con = await connection();
        const { request: sql, values} = buildSqlRequest(request, 'facture_fournisseur_paiement_en_cours_view');
        return await executeSqlrequest({con ,sql, values});
        
    }

    async function findFournisseurExterneFacturesNeverPaid(request){

        const con = await connection();
        const { request: sql, values} = buildSqlRequest(request, 'facture_fournisseur_sans_paiement_view');
        return await executeSqlrequest({con ,sql, values});
        
    }

    async function findFournisseurExterneFacturesDone(request){

        const con = await connection();
        const { request: sql, values} = buildSqlRequest(request, 'facture_fournisseur_paiement_termine_view');
        return await executeSqlrequest({con ,sql, values});
        
    }

   


    return Object.freeze({
        findClientFactures,
        findClientFacturesDone,
        findClientFacturesInProgress,
        findClientFacturesNeverPaid,
        findFournisseurExterneFactures,
        findFournisseurExterneFacturesDone,
        findFournisseurExterneFacturesInProgress,
        findFournisseurExterneFacturesNeverPaid,
        findFournisseurInterneFactures
    })
}
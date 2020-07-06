

export default function factureDa({connection}){

    async function findAll(){
        const con = await connection();
        
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM facture', function(error, results, fields){
                if(error) reject(error)

                resolve(results);
            })
        })
    }

    async function findByYear(year){
        const con = await connection();
        
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM facture WHERE `annee` = ? ', [year] , function(error, results, fields){
                if(error) reject(error)

                resolve(results);
            })
        })
    }

    async function findSum(period){
        const con = await connection();
        
        return new Promise((resolve, reject) => {
            con.query('SELECT SUM (montant) FROM facture WHERE `annee` = ? ', [year] , function(error, results, fields){
                if(error) reject(error)

                resolve(results);
            })
        })
    }

    async function findByMonth(month){
        const con = await connection();
        
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM facture WHERE `mois` = ? ', [month] , function(error, results, fields){
                if(error) reject(error)

                resolve(results);
            })
        })
    }

    async function findById(id){
        const con = await connection();
        
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM facture WHERE `id` = ? ', [id] , function(error, results, fields){
                if(error) reject(error)

                resolve(results);
            })
        })
    }


    return Object.freeze({
        findAll,
        findByYear,
        findByMonth,
        findById
    })
}
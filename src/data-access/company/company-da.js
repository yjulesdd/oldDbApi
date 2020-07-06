

export default function makeCompanyDa({connection}){

    async function find({request, values}){
        const con = await connection();

        return new Promise((resolve, reject) => {
            con.query(request, values ,function(error, results, fields){
                if(error) reject(error)

                resolve(results);
            })
        })
    }

    async function findAll(){
        const con = await connection();
        
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM societe', function(error, results, fields){
                if(error) reject(error)

                resolve(results);
            })
        })
    }

    async function findByName(label){
        const con = await connection();
        
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM societe WHERE `label` = ? ', [label] , function(error, results, fields){
                if(error) reject(error)

                resolve(results);
            })
        })
    }

    async function findById(id){
        const con = await connection();
        
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM societe WHERE `id` = ? ', [id] , function(error, results, fields){
                if(error) reject(error)

                resolve(results);
            })
        })
    }


    return Object.freeze({
        findAll,
        findByName,
        findById
    })
}
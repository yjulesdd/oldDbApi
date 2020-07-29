

function buildSqlRequest({ fields = [], filters = {} } , tableName = null){

    if(!tableName){
        throw('Il faut un nom de la table dans laquelle chercher l\'information');
    }

    const champs = Array.isArray(fields) && fields.length > 0 || !(Object.keys(fields).length === 0 && fields.constructor === Object) ? fields : ['* '];
    const filter = filters;
    const values= [];
    

    let request = '';

    request += 'SELECT ';
    request += champs.join(',');
    request += ' FROM ';
    request += tableName


    for(let j in filter){
        
        if(j === 'where'){
            request += ' WHERE ';
            
            const filterKeys = Object.keys(filter[j]);

            
            filterKeys.map(el => {

                if(filterKeys[0] != el && filter[j][el].length > 0){
                    request += ' AND '
                }
                if(el === 'date'){
                   
                    request += '(' + filter[j][el].name + ' BETWEEN "' + filter[j][el].start + '"  AND  "' + filter[j][el].end +'" )'
                
                }else if(Array.isArray(filter[j][el]) ){

                    if(filter[j][el].length > 0){

                        request += '`'+el+'` IN (' + filter[j][el].map(d => `'${d}'`).join(",") + ')';
                    }

                }else{

                    request += '`'+el+'` = ?';
                    values.push(filter[j][el]);
                }



            })
            
            
        }

        if( j == 'groupBy'){
            
            debugger
            request += ' GROUP BY ';
            debugger
            request += filter[j].join(', ');
        }
        if( j == 'orderBy'){
            
            debugger
            request += ' ORDER BY ';
            debugger
            request += filter[j];
        }

        
    }

    return { request , values}
}

async function executeSqlrequest({con, sql, values}){
    
    if(!sql){
        throw('Vous devez nous soummettre une requête sql');
    }

    return new Promise((resolve, reject) => {
        con.query(
            {
                sql,
                values
            },
            function(error, results, fields){
            if(error){
                reject(error);
                debugger
            }
            resolve(results);
        })
    })
}

function sanitizeStringForSqlDb(table){
    debugger
    const res = table.map((element) => {           
        return `'${'\\"'+element.nom_societe+'\\"'}'`
    });

    return res.join(',');
}

export { buildSqlRequest, executeSqlrequest, sanitizeStringForSqlDb}
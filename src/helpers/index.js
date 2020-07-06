

function buildSqlRequest({ fields = [], filters = {} } = {}){

    const champs = fields.length > 0 ? fields : '* ';
    const filter = filters;
    const values= [];

    let request = '';
    let secondPArt = '';

    request += 'SELECT ';
    request += champs.join(',');


    for(let j in filter){
        
        if(j === 'where'){
            request += ' WHERE ';
            
            const filterKeys = Object.keys(filter[j]);

            filterKeys.map(el => {

                request += '`'+el+'` = ?';
                values.push(filter[j][el]);

            })
            
            
        }

        if( j == 'groupBy'){
            debugger
            request += ' GROUP BY ';
            debugger
            request += filter[j].join(', ');
        }

        
    }

    


    return { request , values}
}

export { buildSqlRequest}
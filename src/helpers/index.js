import { date } from "faker";


function buildSqlRequest({ fields = [], filters = {} } = {}){

    const champs = fields.length > 0 ? fields : ['* '];
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

                if(filterKeys[0] != el){
                    request += ' AND '
                }
                if(el === 'date'){
                   
                    request += '(' + filter[j][el].name + ' BETWEEN "' + filter[j][el].start + '"  AND  "' + filter[j][el].end +'" )'
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

        
    }

    debugger


    return { request , values}
}

export { buildSqlRequest}
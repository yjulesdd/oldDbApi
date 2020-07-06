const mysql = require('mysql');


const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE ;
const DB_PORT = process.env.DB_PORT;


const connection = mysql.createConnection({
  host : DB_HOST,
  user: DB_USER,
  port: DB_PORT,
  password: DB_PASSWORD,
  database: DB_DATABASE
});

let con;

async function setupDb(){
 
  if(connection.state === "disconnected"){
    return new Promise((resolve, reject) => {
        connection.connect(function(err){
          if(err){
            
            reject(err)
          }

          resolve(connection)
        })
    })
  }

  return connection;
}

export default setupDb;
import mysql from 'mysql';
import keys from './keys';

//Se almacena en pool la forma de iniciar la conexion 
const pool = mysql.createPool(keys.database);

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('Coneccion a BD establecida correctamente');
})

export default pool;


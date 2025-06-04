import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'sql7.freesqldatabase.com',
    user: 'sql7783023',
    password: 'n2mL7HMR5g',
    database: 'sql7783023',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

export default connection;
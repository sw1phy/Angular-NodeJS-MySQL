const mysql=require("mysql2")

const pool=mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "candidate_master",
    connectionLimit: 10
})

pool.getConnection((err, connection)=>{
    if(err) throw err;
    console.log("Connected to MySQL DB succesfully");
    connection.release();
    
})

module.exports=pool;
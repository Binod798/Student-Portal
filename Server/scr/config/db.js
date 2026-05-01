const mysql = require("mysql2/promise");
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"MySQL40$",
    database:"course_enrollment"
})
db.getConnection()
.then(res=>console.log("DB connected successfully"))
.catch(err=>console.log(err.message))

module.exports = db
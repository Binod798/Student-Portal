const db = require("../config/db")

const User = {
    findById: async(id)=>{
        const [rows] = await db.query('select * from users where id=?',[id]);
        return rows[0];
    },
    findByEmail : async(email)=>{
        const [rows] = await db.query('select * from users where email = ?',[email])
        return rows[0]
    },
    create: async({student_id,name,email,password_hash})=>{
        const [result] = await db.query('insert into users(student_id,name,email,password) values(?,?,?,?)',[student_id,name,email,password_hash]);
        return{id:student_id,name,email}

    }
    
}
module.exports= User
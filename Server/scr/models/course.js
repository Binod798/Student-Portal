const db = require("../config/db");

const  handle_course_enroll =async(user_id,course_name,course_code)=>{
    

        const [rows] = await db.query('insert into courses(user_id,course_name,course_code) values(?,?,?)',[user_id,course_name,course_code])
        return {course_name,course_code}
    

}
const handle_get_all_course = async(id)=>{
    const [rows] = await db.query('select * from courses where user_id= ?',[id])
    return rows
}

module.exports = {handle_course_enroll,handle_get_all_course}
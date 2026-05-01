const db = require("../config/db");

const handle_get_all_users = async () => {
    try {
        const [all_users] = await db.query('select * from users u join courses c on u.id=c.user_id');
        return all_users

    } catch (err) {
        return err.massage

    }
}

const handle_filter_user = async(course_code)=>{
    try{

        const [filter_user] = await db.query('select * from users u join courses c on u.id=c.user_id where c.course_code =?',[course_code]);
        return filter_user
    }catch(err){
        return err.massage
    }
}

module.exports = {handle_get_all_users,handle_filter_user}
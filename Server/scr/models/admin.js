const db = require("../config/db");

const handle_get_all_users = async () => {
    try {
        const [all_users] = await db.query('select * from users u join courses c on u.id=c.user_id');
        return all_users

    } catch (err) {
        return err.message

    }
}

const handle_filter_user = async (course_code) => {
    try {

        const [filter_user] = await db.query('select * from users u join courses c on u.id=c.user_id where c.course_code =?', [course_code]);
        return filter_user
    } catch (err) {
        return err.message
    }
}
const handle_delete_course = async (course_id) => {
    try {
        const delete_course = await db.query('delete from courses where course_id=?', [course_id])
        console.log(delete_course)
        return delete_course
    } catch (err) {
        return err.message
    }
}
const handle_get_all_enrolled_courses = async() => {
    try {
        const [rows] = await db.query('select course_code from courses');
        return rows;
    } catch (err) {
        throw err
    }
}

module.exports = { handle_get_all_users, handle_filter_user, handle_delete_course,handle_get_all_enrolled_courses }
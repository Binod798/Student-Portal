const { handle_get_all_users, handle_filter_user, handle_delete_course,handle_get_all_enrolled_courses } = require("../models/admin");
const adminController = {
    all_user: async (req, res) => {
        try {

            const { name } = req.user;
            // if(name !=="admin") return res.status(401).json({message:"Only admin can get all users"});
            const all_users = await handle_get_all_users();
            res.status(200).json({ data: all_users })
        } catch (err) {
            res.status(401).json({ message: err.message })
        }

    },
    filter_user: async (req, res) => {
        try {

            const { course_code } = req.query;
            const filter_by_code = await handle_filter_user(course_code)
            return res.status(200).json({ data: filter_by_code })
        } catch (err) {
            return res.status(401).json({ message: err.message })
        }
    },
    delete_course: async (req, res) => {
        try {
            const { course_code } = req.query;
            const delete_course = await handle_delete_course(course_code)
            return res.status(200).json({ message: "Course deleted successfully" })
        } catch (err) {
            return res.status(401).json({ message: err.message })
        }
    },
    all_enrolled_courses: async (req, res) => {
        try {
            const all_enrolled_courses = await handle_get_all_enrolled_courses();
            return res.status(200).json({data:all_enrolled_courses})
        } catch (err) {
            return res.status(401).json({message:err.message})

        }
    }


}
module.exports = adminController
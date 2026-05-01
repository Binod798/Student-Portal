const {handle_course_enroll,handle_get_all_course} = require("../models/course")
const courseEnrollController = {
    enrollCourse: async(req,res)=>{
        const {course_name, course_code} = req.body
        const user = req.user
        try{
            await handle_course_enroll(user.id,course_name,course_code)
            return res.status(201).json({message:`${course_name} inserted successfully`})
        }catch(err){
            res.status(401).json({message:err.message})

        }

    },
    all_courses:async(req,res)=>{
        const {id} = req.user;
        try{

            const courses = await handle_get_all_course(id);
            return res.status(200).json({data:courses})
        }catch(err){
            res.status(401).json({message:err.message})
        }

    }
}
module.exports= courseEnrollController;
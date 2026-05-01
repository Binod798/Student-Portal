const {handle_get_all_users,handle_filter_user} = require("../models/admin");
const adminController = {
    all_user : async(req,res)=>{
        try{

            const {name} = req.user;
            // if(name !=="admin") return res.status(401).json({message:"Only admin can get all users"});
            const all_users = await handle_get_all_users();
            res.status(200).json({data:all_users})
        }catch(err){
            res.status(401).json({message:err.message})
        }
        
    },
    filter_user: async(req,res)=>{
        try{

            const {course_code} = req.query;
            const filter_by_code = await handle_filter_user(course_code)
            return res.status(200).json({data:filter_by_code})
        }catch(err){
            return res.status(401).json({message:err.message})
        }
    }


}
module.exports = adminController
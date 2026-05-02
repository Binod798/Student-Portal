import { useEffect,useState } from "react"
import adminService from "../services/adminService"
export default function SelectOption({ onChange }) {
    const [all_courses, set_all_course] = useState([]);
    useEffect(() => {
        const handle_get_all_courses = async () => {
            try{
                const all_courses = await adminService.all_enrolled_courses();
                const filter_courses = all_courses.map(value=>value.course_code)
                console.log(filter_courses)
                const unique = [...new Set(filter_courses)]
                set_all_course(unique)

            }catch(err){

            }
        }
        handle_get_all_courses()
    }, [])

    return (
        <div className="select-option">
            <select className="form-control" onChange={onChange}>
                <option value="">Select a course</option>
                {all_courses.map((course) => (
                    <option key={course} value={course}>
                        {course}
                    </option>
                ))}
                <option value="all">All courses</option>
            </select>
        </div>
    )
}

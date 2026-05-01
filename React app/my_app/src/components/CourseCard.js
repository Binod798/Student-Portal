import Button from "../components/Button";
import errorHandler from "../utils/errorHandler";
import successHandler from "../utils/successHandler";
import courseService from "../services/courseService";
function CourseCard({course, status, handle_all_courses,isEnrolled=false}) {
  const handleEnroll = async() => {
    try{
      const response = await courseService.enrollCourse(course.course_name, course.course_code);
      successHandler(response);
      handle_all_courses();
    }catch(err){
      errorHandler(err);
    }
    
  };
  return (
    <div key={course.id} className="course-card">
            <h3>{course.course_code}</h3>
            <h3>{course.course_name}</h3>
            {status === "new_enrollment" && <Button disabled={isEnrolled} onClick={handleEnroll}>{isEnrolled ? "Already Enrolled" : "Enroll"}</Button>}
          </div>
   
  )
}

export default CourseCard
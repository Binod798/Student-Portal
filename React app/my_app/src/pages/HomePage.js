import { useState, useEffect } from 'react';
import all_courses from "../utils/constants";
import CourseCard from '../components/CourseCard';
import courseService from '../services/courseService';
function HomePage() {
  const [courses, setCourses] = useState([]);
  const handle_all_courses = async () => {
    try {
      const response = await courseService.getAllCourses();
      setCourses(response);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
  useEffect(() => {
    handle_all_courses();
  }, []);
  console.log(courses);

  return (
    <div className="home-page">
      <h2>Enrolled Courses</h2>
      <div className="enrolled-courses">
        {/* Display enrolled courses here */}
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} status="enrolled" handle_all_courses={handle_all_courses} />
        ))}

      </div>
      <h2>All Courses</h2>
      <div className="all-courses">
        {all_courses.map((course, index) => {
          const isEnrolled = courses.some(enrolledCourse => enrolledCourse.course_code === course.course_code);
          return (
            <CourseCard key={index} course={course} status="new_enrollment" handle_all_courses={handle_all_courses} isEnrolled={isEnrolled} />
          )
        }
        )}
      </div>



    </div>
  )
}

export default HomePage
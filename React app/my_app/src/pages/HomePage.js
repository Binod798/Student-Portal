import {useState,useEffect} from 'react';
import api from '../services/api';
function HomePage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const handle_all_courses = async () => {
      try {
        const response = await api.get('/api/all_courses');
        setCourses(response.data.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    handle_all_courses();
  }, []);
  console.log(courses);

  return (
    <div className="home-page">
       <h2>Enrolled Courses</h2>
      <div className="enrolled-courses">       
        {/* Display enrolled courses here */}
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.course_code}</h3>
            <h3>{course.course_name}</h3>
          </div>
        ))} 

      </div>


       
    </div>
  )
}

export default HomePage
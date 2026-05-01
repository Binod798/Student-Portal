import {useState,useEffect} from 'react';
import api from '../services/api';
import all_courses from "../utils/constants";
import CourseCard from '../components/CourseCard';
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
        {courses.map((course,index) => (
          <CourseCard key={index} course={course} />
        ))} 

      </div>
        <h2>All Courses</h2>
      <div className="all-courses">
        {all_courses.map((course,index) => (
          <CourseCard key={index} course={course} />
        ))} 
      </div>


       
    </div>
  )
}

export default HomePage
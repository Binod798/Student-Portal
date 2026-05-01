import React from 'react'

function CourseCard({course}) {
  return (
    <div key={course.id} className="course-card">
            <h3>{course.course_code}</h3>
            <h3>{course.course_name}</h3>
          </div>
   
  )
}

export default CourseCard
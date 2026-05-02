import {useState,useEffect} from 'react'
import adminService from '../services/adminService';
import Button from "../components/Button";
import successHandler from '../utils/successHandler';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
   const fetchUsers = async () => {
      try {
        const usersData = await adminService.allUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

  useEffect(() => {   

    fetchUsers();
  }, []);

  const handleDeleteCourse = async (courseId) => {
    try {
      await adminService.deleteCourse(courseId);
      successHandler('Course deleted successfully');
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>User Management</h2>
      <table className="users-table">
        <thead className="table-header">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course Name</th>
            <th>Course ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.course_name}</td>
              <td>{user.course_code}</td>
              <td>
                <Button  onClick={() => handleDeleteCourse(user.course_id)} >Delete</Button>
              </td>   
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminDashboard

import "../../styles/components/student-list.css";
import Student from "../student";
const StudentList = ({ students, updateStudent, deleteStudent }) => {
  return (
    <table className="student-list">
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Name</th>
          <th>Age</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="table-body">
        {students.map((val, index) => (
          <Student
            key={index}
            student={val}
            updateStudent={updateStudent}
            deleteStudent={deleteStudent}
          />
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};
export default StudentList;

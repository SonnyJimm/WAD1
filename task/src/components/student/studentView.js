const StudentView = ({ student, deleteStudent, update }) => {
  return (
    <tr>
      <th>{student.id}</th>
      <th>{student.name}</th>
      <th>{student.age}</th>
      <th>
        <button onClick={update}>Update</button>
        <button onClick={() => deleteStudent(student.id)}>Delete</button>
      </th>
    </tr>
  );
};
export default StudentView;

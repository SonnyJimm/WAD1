import { useState } from "react";
const UpdateStudent = ({ student, updateStudent, cancel }) => {
  const [updatedStudent, setUpdatedStudent] = useState(student);
  const updateName = (e) => {
    const newStudent = { ...updatedStudent };
    newStudent.name = e.target.value;
    setUpdatedStudent(newStudent);
  };
  const updateAge = (e) => {
    const newStudent = { ...updatedStudent };
    newStudent.age = e.target.value;
    setUpdatedStudent(newStudent);
  };
  return (
    <tr>
      <th>{student.id}</th>
      <th className="input">
        <input
          name="name"
          value={updatedStudent.name}
          onFocus={(e) => {
            e.target.select();
          }}
          placeholder="Name of Student"
          onChange={updateName}
        />
      </th>
      <th className="input">
        <input
          name="age"
          value={updatedStudent.age}
          onFocus={(e) => {
            e.target.select();
          }}
          placeholder="Age of Student"
          onChange={updateAge}
        />
      </th>
      <th>
        <button
          onClick={() => {
            updateStudent(updatedStudent);
            cancel();
          }}
        >
          Update
        </button>
        <button onClick={cancel}>cancel</button>
      </th>
    </tr>
  );
};
export default UpdateStudent;

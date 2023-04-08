import { useState } from "react";
import "../../styles/components/create-student.css";

const CreateStudent = ({ createStudent }) => {
  const [student, setStudent] = useState({ name: "", age: 0 });
  const onSubmit = (e) => {
    e.preventDefault();
    if (student.name === "" || student.age === "" || student.age === 0) {
      return;
    }
    createStudent(student);
    setStudent({ name: "", age: 0 });
  };
  const updateName = (e) => {
    const newStudent = { ...student };
    newStudent.name = e.target.value;
    setStudent(newStudent);
  };
  const updateAge = (e) => {
    const newStudent = { ...student };
    newStudent.age = e.target.value;
    setStudent(newStudent);
  };
  return (
    <div className="create-student-form">
      <form onSubmit={onSubmit}>
        <label>
          Name :
          <input
            name="name"
            value={student.name}
            onFocus={(e)=>{e.target.select()}}
            placeholder="Name of Student"
            onChange={updateName}
          />
        </label>
        <label>
          Age :
          <input
            type="number"
            name="age"
            onFocus={(e)=>{e.target.select()}}
            value={student.age}
            placeholder="Age of Student"
            onChange={updateAge}
          />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
};
export default CreateStudent;

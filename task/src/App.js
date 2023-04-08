import { useState } from "react";
import { random } from "./util/idGenerator";
import { CreateStudent, StudentList } from "./components";
import "./styles/App.css";
function App() {
  const [students, setStudent] = useState([
    { id: "123", name: "John", age: "22" },
  ]);
  // const getStudent = (id) => {
  //   return students.find((student) => student.id === id);
  // };
  const [isListVisible, setIsListVisible] = useState(true);
  const createStudent = (student) => {
    student.id = random();
    setStudent([student, ...students]);
  };
  const toggleList = () => {
    if (isListVisible) {
      setIsListVisible(false);
    } else {
      setIsListVisible(true);
    }
  };
  const deleteStudent = (id) => {
    console.log(id);
    setStudent(students.filter((student) => student.id !== id));
  };
  const updateStudent = (student) => {
    setStudent(students.map((val) => (val.id === student.id ? student : val)));
  };
  return (
    <div className="App">
      <CreateStudent createStudent={createStudent} />
      {isListVisible && (
        <StudentList
          students={students}
          updateStudent={updateStudent}
          deleteStudent={deleteStudent}
        />
      )}
      <button className="App-toggle" onClick={toggleList}>
        {isListVisible ? "Hide List" : "Show List"}
      </button>
    </div>
  );
}

export default App;

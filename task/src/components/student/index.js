import { useState } from "react";
import StudentView from "./studentView";
import UpdateStudent from "./updateStudent";
const Student = ({ student, updateStudent, deleteStudent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const update = () => {
    setIsEditing(true);
  };
  const cancel = () => {
    setIsEditing(false);
  };
  return isEditing ? (
    <UpdateStudent
      student={student}
      updateStudent={updateStudent}
      cancel={cancel}
    />
  ) : (
    <StudentView
      student={student}
      update={update}
      deleteStudent={deleteStudent}
    />
  );
};
export default Student;

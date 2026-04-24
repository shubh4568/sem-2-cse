import Student from "./Student";
function App(){
  return(
    <div>
      <h1>Student Information </h1>
      <Student
      name="Shubh Chaudhary"
      course="Computer Science"
      marks="98"/>
      <Student
      name="Anita Verma"
      course="Informattion Technology"
      marks="92"/>
      <Student
      name="Rohan Gupta"
      course="Electronics"
      marks="75"/>
    </div>
  )
}
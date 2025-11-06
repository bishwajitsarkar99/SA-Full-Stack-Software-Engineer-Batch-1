import './App.css'
import Skill from './components/Skill';

const App = () => {
  const skills = ["HTML", "CSS", "JS", "React"];

  const progress = "80%";

  const handleClick = (number, e) => {
    console.log('Clicked', e);
  }

  return (
    <>
     <h2>My Skills</h2>

     <button onClick={(e) => handleClick(Math.random(), e)}>Click</button>

     <ul>
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} progress={progress} style={{ color: "red", fontSize: "24px" }} />
      ))}
     </ul>

     
    </>

  )
}

export default App

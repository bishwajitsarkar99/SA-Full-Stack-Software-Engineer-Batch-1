// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const name = "Suhan";
  const age = 20;
  const skills = ["HTML", "CSS", "JS", "React"];

  const showName = false;

  return (
    <>
     <div className='hello-world' >Hello World</div>


     {showName ? <p>Name: {name}</p> : <p>Name is hidden</p>}
     <p>Age: {age}</p>
     <p>Skills: {skills.join(", ")}</p>
     <p>skill2 : {skills}</p>

     <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
     </ul>
    </>

  )
}

export default App

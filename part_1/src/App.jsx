const Header = (props)=>{
  console.log(props)
  return (
    <div>
    <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props)=>{
  console.log(props)
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1}></Part>
      <Part name={props.part2} exercises={props.exercises2}></Part>
      <Part name={props.part3} exercises={props.exercises3}></Part>
    </div>
  )
}

const Part = (props)=>{
  return(
    <div>
      <p>Part name {props.name}, number of exercises {props.exercises}</p>
    </div>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

return (
  <div>

    <Header course={course} />


  </div>  
  )
}


// const Content = (props)=>{
//   return (
//     <div>
//       <Part name={part1} exercises={exercises1}/>
//       <Part name={part2} exercises={exercises2}/>
//       <Part name={part3} exercises={exercises3}/>
//     </div>
//   )
// }

export default App
const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = (props) => {
    return (
      <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
      </div>
    )
  }

  
  
  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}

export default App
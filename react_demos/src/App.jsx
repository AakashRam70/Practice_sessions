import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <CreateCounter count={count} setCount={setCount}></CreateCounter>
    </div>
  )

  function CreateCounter(props) {

    function buttonClick() {
      props.setCount(props.count + 1);
    }

    return (
      <button onClick={buttonClick}>
        Counter {props.count}
      </button>
    )
  }
}

export default App
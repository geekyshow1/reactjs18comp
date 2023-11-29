import { useState } from "react"

export const CounterApp = () => {
  const [count, setCount] = useState(0)
  const handleCounter = () => {
    setCount(count + 1)
    // setCount((prevCount) => prevCount + 1)
  }
  const resetCount = () => {
    setCount(0)
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCounter}>Increase Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </>
  )
}

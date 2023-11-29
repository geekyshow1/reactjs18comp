import { useState } from "react"

export const LearnState = () => {
  const [num, setNum] = useState(5)
  console.log("Number: ", num);
  const handleNum = () => {
    setNum(9)
  }
  const [position, setPosition] = useState({ x: 1, y: 2 })
  console.log("Position: ", position);
  const handlePosition = () => {
    setPosition({ x: 4, y: 6 })
  }
  return (
    <>
      <h1>Number {num}</h1>
      <button onClick={handleNum}>Change Number</button>
      <h1>Position: {position.x} {position.y}</h1>
      <button onClick={handlePosition}>Change Position</button>
    </>
  )
}

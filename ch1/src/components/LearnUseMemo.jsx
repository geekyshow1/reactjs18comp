import { useState, useMemo } from 'react'

export const LearnUseMemo = () => {
  const [count, setCount] = useState(0)
  const handleIncreaseCount = () => {
    console.log("Increase Count Function");
    setCount(count + 1)
  }
  const [randomNumber, setRandomNumber] = useState(null);
  const generateRandomNumber = () => {
    console.log("Generate Random Number Function");
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };
  // const isCountTen = () => {
  //   console.log("isCountTen Called");
  //   if (count === 10) {
  //     return "Yes"
  //   }
  //   return "No"
  // }
  const isCountTen = useMemo(() => {
    console.log("isCountTen Called");
    if (count === 10) {
      return "Yes"
    }
    return "No"
  }, [count])
  return (
    <>
      {/* <h1>is {count} equal to 10 ? --- {isCountTen()}</h1> */}
      <h1>is {count} equal to 10 ? --- {isCountTen}</h1>
      <button onClick={handleIncreaseCount}>Increase Count</button>
      <hr />
      <h2>Random Number: {randomNumber}</h2>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </>
  )
}

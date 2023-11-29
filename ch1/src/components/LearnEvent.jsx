export const LearnEvent = () => {
  const handleClick1 = (e) => {
    e.preventDefault()
    console.log("Button Clicked 1");
  }
  const handleClick2 = (myid) => {
    console.log("Button Clicked 2", myid);
  }
  return (
    <>
      {/* Without Argument */}
      <button onClick={handleClick1}>Click 1</button>

      {/* With Argument */}
      <button onClick={(e) => handleClick2("EMP12345")}>Click 2</button>
    </>
  )
}

import { useCustomCounter } from "../hooks/useCustomCounter"

export const LearnCustomHook = () => {
  const { count, handleIncrement } = useCustomCounter()
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Inc</button>
    </>
  )
}

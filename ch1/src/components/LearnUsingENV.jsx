
export const LearnUsingENV = () => {
  return (
    <>
      <h1>How to use env in React + Vite</h1>
      {import.meta.env.VITE_BASE_API_URL}
      <br />
      {import.meta.env.VITE_API_KEY}
    </>
  )
}

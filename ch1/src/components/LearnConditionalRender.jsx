import { useState } from "react"

export const LearnConditionalRender = () => {
  const status = false
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      {status && <h1>GeekyShows</h1>}
      {isLogin ?
        (<>
          <h1>Dashboard Page</h1>
          <button onClick={() => setIsLogin(false)}>Logout</button>
        </>) :
        (<>
          <h1>Login Page</h1>
          <button onClick={() => setIsLogin(true)}>Login</button>
        </>)}
    </>
  )
}

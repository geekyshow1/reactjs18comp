import { useState } from 'react'

export const useCustomCounter = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount(count + 1)
  }
  return {
    count, handleIncrement
  }
}

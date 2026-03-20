import { useState } from 'react'

export const useToggle = (initialValue: boolean = false) => {
  const [isOnline, setIsOnline] = useState(initialValue)

  const toggleValue = () => {
    setIsOnline(!isOnline)
  }

  return { isOnline, toggleValue }
}

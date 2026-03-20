import { useState } from 'react'

export const StatusToggle = () => {
  const [isOnline, setIsOnline] = useState(false)

  const toggleStatus = () => {
    setIsOnline(!isOnline)
  }

  return (
    <div className="p-4">
      <button
        onClick={toggleStatus}
        className={`text-white px-4 py-2 rounded-lg ${
          isOnline ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        {isOnline ? 'En Linea' : 'Desconectado'}
      </button>
    </div>
  )
}

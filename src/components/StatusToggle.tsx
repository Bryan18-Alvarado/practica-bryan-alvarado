import { useToggle } from '../hooks/useToggle'

export const StatusToggle = () => {
  const { isOnline, toggleValue } = useToggle(false)

  return (
    <div className="p-4">
      <button
        onClick={toggleValue}
        className={`text-white px-4 py-2 rounded-lg ${
          isOnline ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        {isOnline ? 'En Linea' : 'Desconectado'}
      </button>
    </div>
  )
}

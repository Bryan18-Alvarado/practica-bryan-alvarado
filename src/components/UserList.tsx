interface User {
  id: number
  name: string
  isActive: boolean
  role?: string
}

export const UserList = () => {
  const users: User[] = [
    { id: 1, name: 'Bryan', isActive: true, role: 'Project manager' },
    { id: 2, name: 'Luigi', isActive: false },
    { id: 3, name: 'Charles', isActive: true, role: 'editor' },
    { id: 4, name: 'Marlinis', isActive: false, role: 'experto en django' },
  ]
  return (
    <div className="p-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="border p-4 mb-2 rounded-xl shadow text-center"
        >
          <h3 className="font-bold text-lg">{user.name}</h3>
          <p>
            Estado:{' '}
            <span className={user.isActive ? 'text-green-600' : 'text-red-700'}>
              {user.isActive ? 'Activo' : 'Inactivo'}
            </span>
          </p>
          <p>Rol: {user.role ?? 'No definido'}</p>
        </div>
      ))}
    </div>
  )
}

// import { UserList } from './components/UserList'

import { StatusToggle } from './components/StatusToggle'

// import { GradeCalculator } from './components/GradeCalculator'

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      {/* <UserList /> */}
      {/* <GradeCalculator /> */}
      {/* //TODO: el tercer ejercicio es el mismo componente de abajo, solo movi la logica al hook y lo llame a como pedia */}
      <StatusToggle />
    </div>
  )
}

export default App

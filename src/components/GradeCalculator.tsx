function calculateAverage(grades: number[]): number {
  let sum = 0

  for (const califications of grades) {
    sum += califications
  }

  return grades.length > 0 ? sum / grades.length : 0
}

export const GradeCalculator = () => {
  const grades: number[] = [85, 90, 78, 100]

  const average = calculateAverage(grades)

  return (
    <div className="p-4">
      <h3 className="text-center text-2xl font-bold">
        Calificaciones del estudiante:
      </h3>

      {grades.map((grade) => (
        <p className="text-center text-xl">{grade}</p> // profesor, no considere necesario ponerle key a cada elemento ya que no se esta renderizando
      ))}

      <h3 className="text-center text-xl font-bold">Promedio: {average}</h3>
    </div>
  )
}

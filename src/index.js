
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  }
  if (matrix.length === 0) {
    return []
  }
  else {
    matrix.reduce((accumulator, currentValue, index) => {
      const sortedVal = currentValue.sort(function (a, b) {
        if (index % 2 === 0) {
          return a - b
        }
        else {
          return b - a
        }
      })
      sortedVal.map(function (element) {
        accumulator.push(element)
      })
      return accumulator
    }, [])
    return matrix.join().split(',').map(Number)
  }
}

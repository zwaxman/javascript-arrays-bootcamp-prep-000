var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (array,element){
  return [element,...arr]
}

function destructivelyAddElementToBeginningOfArray(array,element){
  return array.unshift(element)
}
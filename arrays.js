var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (arr,el){
  return [el,...arr]
}

function destructivelyAddElementToBeginningOfArray(arr,el){
  arr.unshift(el)
  return arr
}

function addElementToEndOfArray(arr,el){
  return [...arr,el]
}

function destructivelyAddElementToEndOfArray(arr,el){
  arr.push(el)
  return arr
}

function accessElementInArray(arr,i){
  return arr[i]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}
//   describe('accessElementInArray(array, index)', () => {
//     it('accesses the element in array at the given index', () => {
//       expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
//     })
//   })
  
//   describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
//     it('returns the array with the first element removed', () => {
//       expect(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
//     })
    
//     it('alters the original array', ()=>{
//       const array = [1, 2, 3];
//       destructivelyRemoveElementFromBeginningOfArray(array);
//       expect(array).to.eql([2, 3]);
//     })
//   })

//   describe('removeElementFromBeginningOfArray(array)', () => {
//     it('removes the first element from the array', () => {
//       expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
//     })

//     it('does not alter the original array', () => {
//       const array = [1, 2, 3];

//       removeElementFromBeginningOfArray(array);

//       expect(array).to.eql([1, 2, 3]);
//     })
//   })

//   describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
//     it('returns the array with the last element removed', () => {
//       expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
//     })
    
//     it('alters the original array', ()=>{
//       const array = [1, 2, 3];
//       destructivelyRemoveElementFromEndOfArray(array);
//       expect(array).to.eql([1, 2]);
//     })
//   })
  
//   describe('removeElementFromEndOfArray(array)', () => {
//     it('removes the last element from the array', () => {
//       expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
//     })
    
//     it('does not alter the original array', () => {
//       const array = [1, 2, 3];
//       removeElementFromEndOfArray(array);
//       expect(array).to.eql([1, 2, 3]);
//     })
//   })
// })
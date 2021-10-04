// Oefening A
const addTheWordCool = function(array){
  array.push('cool');
  return array
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// Oefening B
const amountOfElementsInArray = function(array) {
  return array.length
}
console.log('Totale lengte:', amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
// 3

// Oefening C
const selectBelgiumFromBenelux = function(array) {
  return array[0]
  // return array.splice(0,1);
}
console.log('Het eerste land in BeNeLux is:', selectBelgiumFromBenelux(["België", "Nederland", "Luxemburg"])); 
// resultaat: "België" 

// Oefening D
const lastElementInArray = function(array) {
  return array.pop()
  // return array.at(-1)
  // return array.reverse()[0]
}
console.log('Het laatste dier is:', lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
  // resultaat: "Schildpad"


// Oefening E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
const impeachTrumpSlice = function(array) {
    return array.slice(1,)
  }
  const impeachTrumpSplice = function(array) {
        array.splice(0, 1,)
        return array
  }
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]     Slice muteert de array niet.
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]    Splice muteert de array wel.

// Oefening F
const stringsTogether = function(array) {
   return array.join(' ')
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

// Oefening G
const combineArrays = function(array1, array2) {
  return array1.concat(array2)
}
console.log(combineArrays([1,2,3], [4,5,6]))
// resultaat: [1,2,3,4,5,6]
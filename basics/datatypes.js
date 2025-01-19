/*
Numbers
String
boolean
null => Standalone value whose type is object
undefined => undefined whose type is undefined
*/
console.table([typeof "Jivan", typeof null, typeof undefined]);
// string, object, undefined

// Datatype conversions
// 1 => true, 0 => false, "" => false, "Jivan" => true

let test = "Jivan"
let converti = Boolean(test)
console.log(typeof converti)
console.log(converti)
// boolean, NaN ( Not a number)


// Conversions and operations 

console.log("1"+2+2)
console.log(1+2+"3")
console.log(+true)

// Prefix and Postfix incrementation

let V1 = 30
let V2 = V1++; // Firstly assgined to V2 then V1 got incremented
let V3 = ++V1;  // Firt get incremented and then got assigned to V2
console.log(V1, V2, V3);

//1.Return the First Element in an Array.
let arr1 = [1, 2, 3]
let arr2 = [80, 5, 100]
let arr3 = [-500, 0, 50]
let result = []
function getFirstValue(anyArray) {
  
        result.push(anyArray[0]) 
   
   return result
}
 console.log(getFirstValue(arr1));
 result.length=0
 console.log(getFirstValue(arr2));
 result.length=0
 console.log(getFirstValue(arr3));


// getFirstValue([1, 2, 3])  // 1
// getFirstValue([80, 5, 100]) // 80
// getFirstValue([-500, 0, 50]) // -500

//2.Return the Last Element in an Array.

function getLastItem(anyArray) {
    result.push(anyArray[2])
    return result
}
result.length=0
console.log(getLastItem([1, 2, 3]));  // 3
result.length=0
console.log(getLastItem(["cat", "dog", "duck"])); // duck
result.length=0
console.log(getLastItem([true, false, true])); //true

// 3.Find the Index
// let arr4 = ["hi", "edabit", "fgh", "abc"]
// let arr5 = ["Red", "blue", "Blue", "Green"]
// let arr6 = ["a", "g", "y", "d"]
// let arr7 = ["Pineapple", "Orange", "Grape", "Apple"]
// let findIndex  = function(a){
//     for (let i = 0; i < arr4.length; i++) {
//      if(arr4.findIndex[i]){
//         console.log(a);
//      }
//     } 
//     return
// }


// console.log(findIndex("fgh")); //2
// console.log(findIndex("blue")); // 1
// console.log(findIndex("d"));  // 3
// console.log(findIndex("Pineapple")); // 0

//4.Return the Sum of Two Numbers.
function addition(c,d) {
    return c+d
}
console.log(addition(3, 2)); // 5
console.log(addition(-3, -6)); // -9
console.log(addition(7, 3)); // 10

// 5.Less Than 100?
let lessThan100 = (a,b)=>{
   if(a+b<100){
   return true
     }
   else{
    return false
     }
} 
console.log(lessThan100(22, 15)); // true
//22+15=37
console.log(lessThan100(83, 34)); // false
//83+34=117
console.log(lessThan100(3, 77));// true

// 6.Volume of a Box
function volumeOfBox(width , length , height) {
   let object={
    width:" ",
    length:" ",
    height:" "
}  
 return +width * +length * +height
 }

 console.log(volumeOfBox(2,5,1 )); // 10

 console.log(volumeOfBox( 4,2,2)); // 16

 console.log(volumeOfBox(2,3,5)); // 30

 //7 .Basketball Points
function points(twoPointers, threePointers) {
    return twoPointers*2 + threePointers*3 
}
console.log(points(1, 1) );// 5
console.log(points(7, 5) );// 29
console.log(points(38, 8)); // 100

// 8.Create a function called 'fillInfo()', which is used to change "my name" to 'Ulfat' ,'my surname' to 'Zakirli', 'my city' to 'Baku'.
const arr8 = [
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    }
]
function fillInfo() {
    let result = []
for (let i of arr8) {
   result.push(arr8[i])
}
return result
}
console.log(fillInfo(['Ulfat','Zakirli','Baku']));
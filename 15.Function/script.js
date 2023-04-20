//1
function getFirstValue(arr) {
    return arr.at(0)
}
console.log(getFirstValue([1, 2, 3]))  // 1
console.log(getFirstValue([80, 5, 100])) // 80
console.log(getFirstValue([-500, 0, 50])) // -500
//2
function getLastItem(arr) {
    return arr.at(-1)
}
console.log(getLastItem([1, 2, 3]))  // 3
console.log(getLastItem(["cat", "dog", "duck"]))  // duck
console.log(getLastItem([true, false, true])) //true
//3
function findIndex(arr , n) {
    return arr.findIndex((el)=>el==n)
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")) // 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")) // 1
console.log(findIndex(["a", "g", "y", "d"], "d") ) // 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") )// 0


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

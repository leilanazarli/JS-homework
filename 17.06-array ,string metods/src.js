// 1.Write a function called: 'getUpper(anyArr)' that returns the newArr with the uppercased first and last character.
const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan']
 const newArr = arr1.map((element)=>element[0].toLocaleUpperCase()+ element.slice(1,-1) + element.at(-1).toLocaleUpperCase()  )
 console.log(newArr);
// console.log: ['GubA', 'MingeceviR', 'BakU', 'GazaG', 'GencE', 'ShirvaN']

// 2.String and Array
let text = 'We are MERN-Stack developers'

// 1.Replace 'MERN Stack' with 'Front-end'.  // We are Front-end developers!
const replaceWord = text.replace('MERN-Stack','Front-end')
console.log(replaceWord);
// 2.Replace all 'e' with 'a'. // wa ara marn-stack davalopars!
const replaceAll = text.replaceAll('e','a')
console.log(replaceAll);
// 3."in Microsoft!" concat to 'text'. //We are MERN-Stack developers in Microsoft!
const concatText = text.concat(" in Microsoft!")
console.log(concatText);
// 4.Find index of each 'r' and collect them in a new Array called 'newArr'  //[4, 9, 26]
// const turnArray= text.split("")
// console.log(turnArray);
let newArrr=[]
text.split('').map((element , index )=> element.toLocaleLowerCase()==='r' ?newArrr.push(index) :newArrr )
console.log(newArrr);
// 5.Find index of first 'r' (excepting 'are').  // 9
console.log(text.toLocaleLowerCase().indexOf("r" ,5 ))

// 6.Find out vowels in 'text' and add them to 'newArr' which contains unique values. //['e','a','o']
let newarr = ["a", "a", "b"];
console.log(uniqueSet = new Set(newarr));
// function getCount (str){
//  let vowelsCount=0
//  let vowels = ['a', 'i', 'o', 'u', 'e'] 
//  for( let text of str ){
//     if (vowels.includes(text)){
//         vowelsCount++
//     }
//  }
//  return vowelsCount
// }console.log(vowelsCount);
// let vowels = ['a', 'i', 'o', 'u', 'e']
// let string = 'We are MERN-Stack developers'

// function getCount (str){
//  let vowelsCount=0
//  for (let i=0 ; i<=string.length-1 ; i++){
//     if(string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
//         vowelsCount += 1;
//       }
//     }
//     return vowelsCount;
//   }console.log(vowelsCount);
// const countVowels = str => Array.from(str)
// .filter(letter => 'aeiou'.includes(letter)).length;

// console.log(countVowels('We are MERN-Stack developers'))
// 3.Write a function(arrow function) called 'calcArea()' which to calculate sum region's area,
//  if region's length is equal to 6 in 'arr2'.

const arr3 = [
    {
        region: 'Yasamal',
        area: 170,
    },

    {
        region: 'Nizami',
        area: 20,
    },

    {
        region: 'Nesimi',
        area: 10,
    },

    {
        region: 'Sebail',
        area: 30,
    },
    {
        region: 'Xetai',
        area: 30,
    },

]
const calcArea=0
const arr3Map=arr3.map((element ,index )=> element.region.length===6 ?calcArea+=index.area :null)
console.log(calcArea);
// console.log(arr3Map);
// console.log: (60)


// 4.Sort 'arr3' ascending order.
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]
const sorted = arr4.sort((a,b)=> a-b)
console.log(sorted);
// console.log: [0, 1, 2, 6, 8, 9, 14, 22, 23, 34, 44]


// 5.Gather all nested array in one array.
const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
const arrFlat = arr5.flat(Infinity)
console.log(arrFlat);
// console.log: [5, 8, 9, 'hi', "don't touch me", 0, '9']


// 6.Sort array "colors" with color's length, if color's length is equal to each other sort them alphabetically.
const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']
console.log(colors.sort((a,b)=>a.length-b.length));

 
// console.log: ['red', 'blue', 'gray', 'pink', 'black', 'brown', 'green', 'white', 'violet', 'yellow']




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

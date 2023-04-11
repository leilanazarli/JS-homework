// 1.Convert Age to Days

function calcAge(age) {
    return (age *365);
    }

 console.log(calcAge(65));
 console.log(calcAge(0));
console.log(calcAge(20)); 

// 2.Loop text
// example 1
//  let firstName="Front-end Developer"
//  for (let i=0 ; i<firstName.length ; i++){
//     for (let j=0 ; j<=i ; j++){
//        document.write(firstName[j]); 
//     }
//     document.write("<br>");
// }
// example 2
const frontEnd = ['F', 'Fr', 'Fro', 'fron', 'Front','Front-','Front-e','Front-en','Front-end','Front-end ','Front-end D','Front-end De ','Front-end Dev','Front-end Deve','Front-end Devel','Front-end Develo','Front-end Develop','Front-end Develope','Front-end Developer']
for (const i of frontEnd) {
    console.log(i)
}

// 3.Sum of even numbers(e.g: 2,4,6...) in 10.
function sum_even_10() {
    let sum = 0;
    let  i=0
    while(i<10){
        if(i%2===0){
            sum = sum+i;
        }
        i++;
    }
    return sum; 
}
console.log(sum_even_10());
   
 //  4.Multiply the odd numbers(e.g: 1,3,5...) in 17.
        function multiplyOdd() {
            let multiply = 1 ;
            let a = 1
            while(a<17){
                if(a%2===1){
                    multiply = multiply*a;

                }
                a++; 
            }
            return multiply;
        }
     console.log(multiplyOdd());
     
 //  5.Multiply numbers between 10 and 18.
     let x=1
       for(let m=10;m<=18;m++ ){
        x*=m;

       }
       console.log(x);
 // 6.Sum numbers between 17 and 30. Except 19, 20.
     let s=1
     for(let b=17 ; b<=30 ; b++){
      if(b==19 || b==20){
      continue
     }s+=b;
     console.log(b);
    }
//7.Sum of even numbers and assign this result a variable.
//Sum of odd numbers and assign this result a variable.
let e=1 
while(e<20){
  if(e%2===1 ){
    s+=e ; 
    console.log(e);
  } 
  e++
}
let u=1
while(u<20){
  if(u%2===0){
   s+=u ;
   console.log(u);
  }
  u++
}
console.log(u-e);
//8.Find of even numbers(e.g: 2,4,6...) in 16. And every number to the power of 2.
 for(let o=0 ; o<=16 ; o++){
  if(o%2===0){
    s+=o;
    console.log(`${o} , ${o**2}`);
  }
 }
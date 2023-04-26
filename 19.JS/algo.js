//1
function prCharWithFreq(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
    }
    let count = {};
    for (let i = 0; i < str.length; i++) {
      if (!count[str[i]]) {
        console.log(str[i] + obj[str[i]] + " ");
        count[str[i]] = true;
      }
    }
    console.log("\n");
  }
  let str = "hello world!";
  prCharWithFreq(str);


  //2
 
  function findMedian(a){
    let l=a.length
   a.sort((a,b)=>a-b)
   if(l%2!=0){
  return  a[Math.floor(l/2)]
   }
 return (a[Math.floor((l-1)/2)]+a[l/2])/2
}
console.log(findMedian([1,2,3,3,4,5,8,7,8]));

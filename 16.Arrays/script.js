// Task 1

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
fullStack=frontEnd.concat(backEnd)
console.log(fullStack) 

// Task 2

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//example 1
const sum = ages.reduce((a,b)=>a+b)
console.log(sum/ages.length);
//example 2
// for (const age of ages)
//     summ = (age * ages.length)/ages.length
// console.log(summ);

//Task 3

const countries = [ 
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let country=0
  country = countries.map((element ,index)=>`${index}.${element.slice(0,3)}` )
 console.log(country);

 //Task 4
 let numbers = [
    4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,
    5, 6, 3, 7, 3, 7,
  ];
  let num=0
  let element =numbers.map((element ,index)=>element===7 ?num+=index :null)
 //example 1
//   console.log(element.at(-1));
 //example 2
  console.log(num);

//Task 5 ,6
const todos = [
    {
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: true,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    }
]
//Task 5
//example 1
let completed = todos.filter((element)=>element.completed==true ?element :null)
console.log(completed);
//example 2
// console.log(todos.filter((element)=>element.completed==true ?element :null));

//Task 6
let todosTitle=todos.filter((element)=>element.title.length>40)
console.log(todosTitle);

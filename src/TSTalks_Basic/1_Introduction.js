// 1 // 

// Why do we need TS? 
// Why Static Type Checking? 
// Why this session (on basics) ?


// Ex 1
const user = {
    name: "Daniel",
    age: 26,
  };
  user.location;

// Ex 2
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet();
greet('Vikram', 1212423534);
greet('TechTalk', Date());
greet('TechTalk', new Date());
greet(12456, new FormData());
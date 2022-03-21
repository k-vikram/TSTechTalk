// 1 // Why do we need TS? Why Static Type Checking? Why this session (basic)//


//- Catch logic error and Bugs
//- Predictable Programming
//- Basic Level 1 testing [Static Test -> Unit Testing -> Integartion Test -> e2e testing]
//- Write better and extensible, dynamic types

//Ex1
// const user = {
//     name: "Daniel",
//     age: 26,
//   };
// user.location;

// // Ex2
// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   }

// greet();
// greet('Vikram', 1212423534);
// greet('TechTalk', new Date());

// ---> FOCUS -> noImplicitAny and strictNullChecks (tsconfig.json)

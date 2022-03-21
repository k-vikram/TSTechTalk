// 5 // Literal Types, Type Assertions (Casting in OOPS world), Spread operators


// const gender: 'male' | 'female' | 'other' = 'alien gender';
// let haha = "hello" as const;  //becomes readonly
// haha = 'yo';

//QQ2: Implement a cube function
// function cubeIt(...nums: number[]) {
//   return nums.map((eachNum) => <cube it boys!>);
// }
//cubeIt(1,2,3,4);

function addIt({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}













































// Cube It 
function cubeIt(...nums: number[]) {
    return nums.map((eachNum) => eachNum**3);
    //return nums.map((eachNum) => Math.pow(eachNum, 3));
  }
cubeIt(1,2,3,4);
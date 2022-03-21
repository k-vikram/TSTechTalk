// 3 // Object Types


const arr1: number[] = [1,2,3], arr2: Array<number> = [1,2,3];
const obj1: { firstName: string, lastName?: string} =  { firstName: "TechTalk", lastName: "Tuesdays" };
const obj2: { firstName: string, lastName?: string} =  { firstName: "TechTalk" };
const obj3: Record<number|string, string> = { 0: "TechTalk", "str": "Tuesdays", 2: "true" };
function getTalkDetails(id: 'string') {
    return id;
  }
const func1: () => void = () => {}; 
const func2: () => void = () => { return "quirk"; };
const some = func2();
console.log(some);

const unions: string | number = Math.random() < 0.5 ? 'hi' : 23;
typeof unions === 'string' ? unions.toUpperCase() : unions; // type narrowing

 // 6 // Generics

// - Generics is Easy peasy to start with.

function returnItAsItIsString(arr: string[]) {
    return arr[0];
}
function returnItAsItIsNumber(arr: number[]) {
    return arr[0];
}
function returnItAsItIsBool(arr: boolean[]) {
    return arr[0];
}


const s = returnItAsItIsString(["a", "b", "c"]);
const n = returnItAsItIsNumber([1, 2, 3]);
const u = returnItAsItIsBool([false, true, true]);

function returnItAsItIsWithGeneric<X>(arr: X[]): X { // solve for X 
    return arr[0];
}

const sG = returnItAsItIsWithGeneric(["a", "b", "c"]);
const nG = returnItAsItIsWithGeneric([1, 2, 3]);
const uG = returnItAsItIsWithGeneric([false, true, true]);
const eG = returnItAsItIsWithGeneric([]);
const nuG = returnItAsItIsWithGeneric([null]);
// Type Factory Pattern

//Multiple Generics in a  Func
function mapThisArr<X, Y>(sampleArr: X[], func: (arg: X) => Y): Y[] {  
    return sampleArr.map(func); 
}

const mappedArr = mapThisArr(["1", "2", "3"], (n) => parseInt(n)); // X = string; n = string; Y = number;

//////////////////////////////////////////////////

interface Dataset{
    id: number,
    name: string,
    files: string[]
  }

const listDS: Dataset[] = [
  {
  id: 1,
  name: "DS1",
  files: ['a.txt', 'b.pdf']
},
{
  id: 2,
  name: "DS2",
  files: ['a.txt', 'b.txt']
}
]

const mappedArrDS = mapThisArr(listDS, (n) => n.files.join(',')); // X = Dataset ; n = Dataset; Y = string;

////////////////////////////////////////////////////////////

 
 // Generics with Extends 
 function lengthChecker<T extends { length: number }>(a: T, b: T) { // constraining // No explicit definition T = string | any[] | { length: smoething, ..}
    if (a.length >= b.length) {
        return a;
    } else if(Math.random() < 0.5) {
        return b;
    } 
}

lengthChecker({ length: 6, name: 'russia' }, { length: 7, name: 'ukraine' });
//lengthChecker({ length: 6, name: 'russia' }, { name: 'ukraine' });
lengthChecker('string with len', 'string 2 with some len');
lengthChecker([1, 2, 4], [3, 2, 1, 0]);
//lengthChecker([1, 2, 4], 'hello');
lengthChecker<string | number[]>([1, 2, 4], 'hello'); //Explicit Invoking of Generic // Pass user-defined types as well
//lengthChecker(1000, false); 

//Generics with Interfaces

interface GenericIdentityFn<T> {
    (arg: T): T;
    description?: T;
    prop1?: T;
}

function genFunc<T>(passVal: T) : T {
    return passVal;
}

const newFuncGeneric: GenericIdentityFn<string> = genFunc;
newFuncGeneric.description = 'WW-III';
newFuncGeneric.prop1 = 'stop war!';
newFuncGeneric("asdasdsa");

////

interface SomeDynamicViewModel<T> {
    someCallback: (val1: T) => T
    description?: T;
    prop1?: T;
}

const dynamicStuffNum: SomeDynamicViewModel<number> = {
    someCallback: (val1) => {return val1 },
    description: 12,
    prop1: 99123123
}
dynamicStuffNum.someCallback(12);


const dynamicStuffBool: SomeDynamicViewModel<boolean> = {
    someCallback: (val1) => {return val1 },
    description: false,
    prop1: true
}
dynamicStuffBool.someCallback(false);

////

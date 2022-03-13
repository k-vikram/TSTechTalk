// 1 // Why do we need TS? Why Static Type Checking?

/*

- Catch logic error and Bugs
- Predictable Programming
- Basic Level 1 testing [Static Test -> Unit Testing -> Integartion Test -> e2e testing]

Ex1
const user = {
    name: "Daniel",
    age: 26,
  };
user.location;

Ex2
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }

greet();
greet('Vikram', 1212423534);
greet('TechTalk', new Date());

*/


// 2 // noImplicitAny and strictNullChecks (tsconfig.json)


// 3 // Simple Types

/*
const a: string = "", b: number = 0, c: boolean= false, d: null = null, e: undefined= undefined,
 f: bigint= 12134n, g: symbol = Symbol(), h:any = ()=>{},i:unknown=(1/0);
 //,j:never;

 // QQ1: Anybody show me an example of type 'never', ''unknown' ??
*/


// 4 // Object Types

/*
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
*/

// 5 // Aliases/Types, Interfaces , Difference in-b/w them

/*
const node: HTMLAnchorElement = document.getElementById("root") as HTMLAnchorElement;

interface SomeType {
  readonly prop1: string;
  readonly someObj: { name: string; age: number };
}

const someObjIns: SomeType = {
    prop1: "hello",
    someObj: { name: "name1", age: 25 }
}
someObjIns.prop1 = 'hi';
someObjIns.someObj.name = 'hola';
someObjIns.someObj = { name: "name2", age: 20 };

const someObjIns2: SomeType = {
    prop1: "namaste",
    someObj: { name: "name2", age: 35 }
}
*/

// 6 // Literal Types, Type Assertions (Casting in OOPS world), Spread operators

/*
const gender: 'male' | 'female' | 'other' = 'alien gender';
let haha = "hello" as const;
haha = 'yo';
//QQ2: Implement a cube function
function cubeIt(...nums: number[]) {
  return nums.map((eachNum) => <cube it boys!>);
}
cubeIt(1,2,3,4);

function addIt({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
*/


// 5 // Function Definition with Properties, Overloads

/*
const abc = (p1: number, p2: string) : string => { return 'turncoats!'}
const p3 = abc(2,"12");

function lengthCalc(s: string): number;
function lengthCalc(arr: any[], some?: boolean): number;
function lengthCalc(x: string | Array<any>, some: boolean = true ) {
  return some ? x.length: 0;
}
//quirk
lengthCalc("hi")
lengthCalc([1,2,3]);
lengthCalc([0], false);
//lengthCalc(Math.random() > 0.5 ? "hello" : [0]); //quirk

// With Function Arg
interface DetailedFunction {
  description: string;
  (someArg: number): number;
  (someArg2: string, someArg3?: number): string;
};

function doSomething(fn: DetailedFunction) {
  console.log(fn.description + "Talk #" + fn(3) + fn("on TS Basics", 0) + fn("Rocks!")); // Find Easter Egg!
}

// QQ3: Anybody implement/debug hoc definition for us ??
function hof(a: string): string { return a; }
hof.description = 'TechTalkTuesday';
doSomething(hof as DetailedFunction); // Incorrect Implementation

interface NumberArr {
  [index: string]: number;
 
  length: number; 
  name: string;

*/

// 6 // Generics

// - Generics is Easy peasy to start with.


/*
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

function returnItAsItIsWithGeneric<T>(arr: T[]): T {
    return arr[0];
}

const sG = returnItAsItIsWithGeneric(["a", "b", "c"]);
const nG = returnItAsItIsWithGeneric([1, 2, 3]);
const uG = returnItAsItIsWithGeneric([false, true, true]);
const eG = returnItAsItIsWithGeneric([]);
const nuG = returnItAsItIsWithGeneric([null]);
// Type Factory Pattern

//Multiple Generics ina  Func
function mapThisArr<X, Y>(sampleArr: X[], func: (arg: X) => Y): Y[] {
    return sampleArr.map(func);
}
const mappedArr = mapThisArr(["1", "2", "3"], (n) => parseInt(n));

// Generics with Extends
function lengthChecker<T extends { length: number }>(a: T, b: T) { // constraining // No explicit definition
    if (a.length >= b.length) {
        return a;
    } else if(Math.random() < 0.5) {
        return b;
    } 
    // else {
    //     return { length: 0 }; //quirk
    // }
}

lengthChecker({ length: 6, name: 'russia' }, { length: 7, name: 'ukraine' });
lengthChecker({ length: 6, name: 'russia' }, { name: 'ukraine' });
lengthChecker('string with len', 'string 2 with some len');
lengthChecker([1, 2, 4], [3, 2, 1, 0]);
lengthChecker([1, 2, 4], 'hello');
lengthChecker<string | number[]>([1, 2, 4], 'hello'); //Explicit Invoking of Generic // Pass user-defined types as well
lengthChecker(1000, false); 

//Generics with Interfaces

interface GenericIdentityFn<T> {
    <T>(arg: T): T;
    description?: T;
    prop1?: T;
}

function genFunc<T>(passVal: T) : T {
    return passVal;
 }

const newFuncGeneric: GenericIdentityFn<string> = genFunc;
newFuncGeneric.description = 'WW-III';


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
//.. so on

*/
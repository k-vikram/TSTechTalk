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
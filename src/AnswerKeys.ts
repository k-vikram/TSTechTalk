// never type

function fail(msg: string): never {
    throw new Error(msg);
}

function neverDemo(val: string | number) {
    if(typeof val === 'string'){
        return 'string found'
    } else if(typeof val === 'number'){
        return 'string found'
    } else {
        return val;
    }
}

//unknown type
function unknownDemo1(a: any) {
    a.b(); // Works but is unsafe
  }
  function unknownDemo2(a: unknown) {
   // a.b(); // Fails, is safe
  }

// Cube It 
function cubeIt(...nums: number[]) {
    return nums.map((eachNum) => eachNum**3);
    //return nums.map((eachNum) => Math.pow(eachNum, 3));
  }
cubeIt(1,2,3,4);

// Function Overloading

function hof(a: number ): boolean;
function hof(a: string, b?: number ): boolean;
function hof(a: number | string, b?: number): boolean { return true; }
// 2 // Simple Types


const a: string = "", b: number = 0, c: boolean= false, d: null = null, e: undefined= undefined,
 f: bigint= 12134n, g: symbol = Symbol(), h:any = ()=>{},i:unknown=(1/0);
 //,j:never;

 // QQ1: Anybody show me an example of type 'never', ''unknown' ??





















































//Answers 

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


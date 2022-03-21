// 4 // Aliases/Types, Interfaces , Difference in-b/w them


const node: HTMLAnchorElement = document.getElementById("root") as HTMLAnchorElement;

interface SomeType {
  readonly prop1: string;
  readonly someObj: { name: string; age: number };
}

const someObjIns: SomeType = {
    prop1: "hello",
    someObj: { name: "name1", age: 25 }
}

// someObjIns.prop1 = 'hi';
// someObjIns.someObj.name = 'hola';
// someObjIns.someObj = { name: "name2", age: 20 };

const someObjIns2: SomeType = {
    prop1: "namaste",
    someObj: { name: "name2", age: 35 }
}

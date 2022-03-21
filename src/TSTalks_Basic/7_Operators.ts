// 7 // Opertors

    // keyof Operator

    type SomeCoordinate = { x: number; y: number , [z: string]: number };
    // let SomeCoordinate = {x: 10.22, b: 45.21 } // **cannot operate on a const/let variable, only on type variable**
    type P = keyof SomeCoordinate;
    let loc: P =   "x"  && "y" // && "z" ; //"s" //"hasOwnProperty";
    let abcd = {a: 10, b: 20};

    type ArrayOrObjLike = Array<any>;  //{ [n: number]: unknown }; // Record<number, unknown> ; // Array<any>; 
    type A = keyof ArrayOrObjLike;
    let ar: A = 123432432; // because array index can be any number

  // typeof Operator

    let greet = "hello";
    type GT = typeof greet;
    let greet2: GT = "namaste";

    function GibberGreet() {
      return { foo: 10, bar: 3 };
    }
    const jsv = typeof GibberGreet; //"function" // JAVASCRIPT
    type tsv = typeof GibberGreet;  // TYPESCRIPT

    type gibberGreetType = ReturnType<tsv>; // **works only on js variables, not on type variables** // not even on func invocations

  // Indexing Operator
    type PersonType = { name: string, desigation: string, dept: string };
    const Person1: { name: PersonType["name"], desigation: PersonType["desigation"], dept: PersonType["dept"] } = { name: "Vikram", desigation: "sfe", dept: "ui" };
    const Person2: PersonType  = { name: "Sainadh", desigation: "sbe", dept: "api" };
    const Person3 = { name: "Kiran", desigation: "em", dept: "product" };
    const Person4 = { userId: "Susheel", title: "em", coe:"ui"  };

    // Homgenous Array
    const PplArray = [
      Person2,
      Person1,
      Person3,
      Person4, // Hetrogenous Array
        "someguy"
    ];
    
    // application of typeof
    type GeneralPerson = typeof PplArray[number];
    type PersonName =  PersonType["name"]; // typeof Person1["name"];

  // Conditional Operator
    
    //Syntax - SomeType extends OtherType ? TrueType : FalseType;
    type MessageOf<T extends { "message": string } > = T["message"];
    const m: MessageOf<{"message": string, id: number}> = "Namaste I am TS";

    type ConditionalMessageOf<T> = T extends  { "message": string } ?  T["message"] : T;
    const cm: ConditionalMessageOf<string> = "hello";
    const cm2: ConditionalMessageOf<number> = 234;
    const cm3: ConditionalMessageOf<Array<boolean>> = [false, true] ;
    const cm4: ConditionalMessageOf<Record<string, any>> = { a: 10, b: true, c: 'ok', d: () => {} } ;
    const cm5: ConditionalMessageOf<{ [ message: string ] : string, [n : number]: string }> = { message: "I 💖 TS", noMsg: "I ❌ TS", 3: "ok" } ; // QQ for the team
    const cm6: ConditionalMessageOf<{ message : string, [n : number]: string }> = "I 💖 TS"; // with tears
    
    // check for array types in particular
    type CheckArray<T> = T extends any[] ? T[number] : T;
    type Str = CheckArray<string[]>; // CheckArray<any[]>; CheckArray<never[]>; CheckArray<number[]>;

  // Mapped Types
  
  type SimpleGeneralObj = {
    [keyName: string | number | symbol]: any
  }
  const ObjDec: SimpleGeneralObj = {
    hi: true, yo: false, 4: false, 8977: () => "haha", false: 123
  }

  const ObjDec2: { [ Val in keyof SimpleGeneralObj] : any } = {
    some: "value",
    1: false
  }
  const ObjDec3: { [ Val in keyof SimpleGeneralObj as `newKeyname_${string & Val}`] : any } = {
    newKeyname_some: "value",
    newKeyname_1: false
  }

  type MappedGenType<T> = { 
    [OK in keyof T as `newKeyname_${string & OK}`] : any
  } // Show Capitalised

  const ObjDec4 :MappedGenType<SimpleGeneralObj> = {
    newKeyname_some: "value",
    newKeyname_1: false
  }

  // HONORABLE Utility OPERATORS MENTIONS

   // Omit, Partial, Readonly, Pick, Exclude, Required, Record.... - interfaces VM
   // Capitalize, Uncapitalize - strings
   // ReturnType - funcs

  // Literals Type

    enum UiTeam{
      Susheel="Susheel",
      Vikram="Vikram",
      Sashank="Sashank",
      Harjaap="Harjaap",
      Aneesh="Aneesh",
      Simar="Simar"
    }

    enum ApiTeam{
      Kiran="Kiran",
      Sainadh="Sainadh",
      Rajiv="Rajiv",
      Sudheer="Sudheer",
    }

    type TsSessions = "TS_Session_Basic" | "TS_Session_Adv";
    type SessionReaction = "💙" | "💔" | "🆗";
    type UiTeammates = keyof typeof UiTeam ;
    type ApiTeammates = keyof typeof ApiTeam ;
   
    type Verdicts<T> = `${string & T}_${TsSessions}_${SessionReaction}`;
    type UiVerdicts = Verdicts<UiTeammates>;
    type ApiVerdicts = Verdicts<ApiTeammates>;
    type sssa= Verdicts<string>

    // QUIRK to convert an array of string to a union-ised string type
    const UIGUYS = ['Susheel', 'Simar', 'Sashank', 'Harjaap', 'Aneesh', 'Vikram'] as const;
    type UIGUYS_TYPED =  typeof UIGUYS[number];


    // Look Forward in Adv Session

    // - Mixin Pattern
    // - Explore a Library
    // - Bhailang (new)
    // - Some Practical React TS Examples
    // - Anything else interesting from TS world

// function overload 関数オーバーロード

type Combinable4 = string | number;

// function add(a: number): number;
function add4(a: number, b: number): number;
function add4(a: string, b: string): string;
function add4(a: string, b: number): string;
function add4(a: number, b: string): string;
function add4(a: Combinable4, b: Combinable4) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add4("Hello", " TypeScript");
console.log(result.split(" ")); // ['Hello', 'TypeScript']
// const result = add(1, 5); // const result: string | number
// const result_ = add('Hello', 'TypeScropt') // const result_: string | number

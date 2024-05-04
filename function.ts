function add(n1: number, n2: number): number{
    return n1 + n2
}

function printResult(num: number): void {
    console.log('result' + num)
}

// function 関数名(引数, 引数, コールバック関数) 引数を受け取った二つの数値を合計それを戻り値として返すのではなくてコールバック関数に引数として渡す
//  コールバック関数の型を定義：この関数は一つのナンバーを受け取り戻り値はvoidで何も返さない
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
    return result; // コールバックにvoidを指定してもエラーにならないこれは値を返しても返さなくても特に影響が無いと言うこと
})

console.log(printResult(add(4, 12))); //viod はundefinedを返す

// let combineValues; // any型
// let combineValues = 5;
// let combineValues: Function; // デフォルトでFunctionを指定できるが様々な関数を代入できてしまう。
// let combineValues = printResult;
let combineValues: (a: number, b:number) => number; // 明示的に関数を指定するにはアローを使う  (引数) => 戻り値の型

combineValues = add;

console.log(combineValues(10, 8));

// union型の基本的な使い方
function combine(input1: number | string , input2: number | string) {
    let result;
    if (typeof input1 === 'number' &&  typeof input2 === 'number' ) {
        result =  input1+ input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combineNames = combine('Max', 'Anna');
console.log(combineNames)

// エイリアス型：複雑な型を自分の好きな型名で定義できるため書き間違いを防げる。
type Combinable = number | string; 
type CombersonalDescriptor = 'as-number' | 'as-text'; // リテラル型をエイリアス型に利用

function combine2(
    input1: Combinable, // エイリアス型 
    input2: Combinable, 
    resultConversion: CombersonalDescriptor,
    // リテラル型:number stringを指定するものではなく値そのものを厳密に指定すること
    // resultConversion: 'as-number' |'as-text', // リテラル型 Union型との併用
) {
    let result;
    if ((typeof input1 === 'number' &&  typeof input2 === 'number') || resultConversion === 'as-number') {
        result =  +input1 + +input2
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     return +result // +result +をつけることで数値に変換している
    // } else {
    //     return result.toString();
    // }
}

const combineAgesNum = combine2(30, 26, 'as-number');
console.log(combineAgesNum);

const combineStringAges = combine2('30', '26', 'as-number');
console.log(combineStringAges);

const combineNamesStr = combine2('Max', 'Anna', 'as-text');
console.log(combineNames);
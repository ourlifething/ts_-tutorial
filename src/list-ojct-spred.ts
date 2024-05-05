// スプレッド演算子 リスト
const hobbies = ["spoes", "cooking"];
const activeHobbies = ["hiking"];
const roomHobbies = ["readBook", ...hobbies]; // 直接配列の中に展開もできる

activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies); // ...スプレッド演算子 リストとして（参照ではない形で）展開できる：コピペ

// オブジェクト
const brother = {
  firstName: "max",
  age: 30,
};

// 参照ではない
const copiedBrother = {
  ...brother,
};

// パラメータをタプルで受け取ることで入力値を背源することもできる: const addNumber = (...numbers: [number, number, number])
// reduceは配列に対して使えるメソッド全ての配列の要素になんらかの処理を行いその結果をまとめて返す
// redius(計算を行う関数, 計算の初期値){return 計算方法} : reduce(() => {}, 0)
const addNumber = (...numbers: number[]) => {
  return numbers.reduce((curlresult, curlValue) => {
    return curlresult + curlValue;
  }, 0);
};
const addNumbers = addNumber(8, 9, 19); //36
console.log(addNumbers);

// 分割代入
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
const [hobby1, hobby2, ...remainigHobbies] = hobbies; // 分割代入したのち追加の項目がhobbiesにあればスプレッド演算子で受け取る。参照ではない。コピペ

const { firstName: userFirstName, age } = brother; // userFirstNameで上書きした

console.log(userFirstName, age); // max 30

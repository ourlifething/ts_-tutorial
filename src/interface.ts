// function型
// type AddFn = (n1: number, n2: number) => number;
// intrfaceは関数の構造を定義する時に使うこともできる 結局のところ function型の別の書き方
interface AddFn {
  (a: number, b: number): number;
}

let addInterFace: AddFn;

addInterFace = (n1: number, n2: number) => {
  return n1 + n2;
};

// readonly のみ設定できる private,publicはできない
// オプショナルな変数を持つこともできる。またオプショナルなメソッドも同様に定義できる
interface Named {
  readonly name?: string;
  outputName?: string;
}

// interfaceは複数継承可能 interface Greetable extends Named, AnotherInterface {}
// 構造のみを定義できる値や初期値は追加できない。
// interfaceは複数のクラスで共有することができる
interface Greetable extends Named {
  greet(phrase: string): void;
}
// typeとの違い：typeは初期値を代入できる。ユニオン型などの利用もできる。
// type Person = {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// Personクラスはinterface（実装） Greetableを実装
// interfaceに定義してある構造以外のメソッドやプロパティを追加することは問題ない
class Person implements Greetable {
  name?: string; // readonlyである
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    }
    console.log("Hi");
  }
}

// オブジェクトの型チェックができる
let user1: Greetable;

// 実装する際に型、メソッドをinterfaceの定義を満たさなくてはならない。
// user1 = {
//     name: 'Max',
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name);
//     }
// }

user1 = new Person();

user1.greet("Hello I am");
console.log(user1); // Person {age: 30, name: 'Max'}

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
// 交差型
type ElevatedEmploee = Admin & Employee;
// インターフェースでも同じことができる
interface ElevatedEmploeeInterFace extends Admin, Employee {}

const e1: ElevatedEmploee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable2 = string | number;
type Numeric = number | boolean;

// Universalに代入される変数に共通で持たれるnumberがUniversalの型になる
type Universal = Combinable2 & Numeric;

// 型ガード：オブジェクトにメソッドやプロパティがあることをチェックし特定の処理を実行するという概念
function addCombin(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnkownEmployee = Employee | Admin;

// in を使った型ガード
function printEmployeeInformation(emp: UnkownEmployee) {
  console.log(emp.name);
  if ("privileges" in emp) {
    console.log("Privileges:" + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("運転中...");
  }
}

class Truck {
  drive() {
    console.log("トレックを運転中");
  }
  loadCargo(amount: number) {
    console.log("荷物を乗せています..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// class で作られたものであればinstanceof がつかえる
// instanceofはjavascriptの関数
function useVihicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVihicle(v1);
useVihicle(v2);

// ディスクリミネーテッドユニオンズ：プロパティをつかってどのオブジェクトなのかをチェックできる
interface Bird {
  type: "bird"; // リテラル型 typeはストリングかつbirdという文字列であるという型
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // typeはストリングかつhoseという文字列であるという型
  runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // if("flyingSpeed" instanceof Bird) instanceofはインターフェースには使えない
  // if("flyingSpeed" in animal) {
  //     console.log(animal.flyingSpeed)
  // } このような書き方はできるがスペルミスを起こしたりしやすい。
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("移動速度:" + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// const userInputElement: HTMLElement HTMLElement型は全ての酢類のHtmlタグを表す一般的な型なので特定のHtmlタグにしかないプロパティにはサポートしていない。なのでここでタイプスクリプトにオブジェクトの型は実際になんの型かを伝える必要がある　！で単にnullではないということだけではなくHTMLElement型であると伝える必要がある。それができるのが型キャスト型キャストは２種類ありどちらも同じであるがプロジェクトの方針でどちらを採用するかなどは決めると良い
// const userInputElement = document.getElementById('user-input')!;
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // 型キャスト1: <HTMLInputElement>をオブジェクトの前につける
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // 型キャスト２: as HTMLInputElementをつける
const userInputElement = document.getElementById('user-input');
if(userInputElement) {
    (userInputElement as HTMLInputElement).value = 'こんにちは'; // ()で囲んだ上で.valueとする
}

// インデックス型 [プロパティ名前: プロパティの型]: プロパティの値の型　※stringかnumberのみ
// どのようなプロパティがあるか事前にわからない場合（ユーザーの入力値をチェックする必要があるなど）
interface ErrorContainer { // {email: '正しいメールアドレスではありません', username: 'ユーザー名に記号を含めることはできません}
    [prop: string]: string;
    // どの入力フィールドのえらーなのか？：入力フィールドの種類を示すIDとそれに紐ずくエラーを持たせるオブジェクトを作りたい
}

const errorBag: ErrorContainer = {
    email: '正しいメールアドレスではありません',
    username: 'ユーザー名に記号を含めることはできません',
};
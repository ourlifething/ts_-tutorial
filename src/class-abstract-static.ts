abstract class Department {  // abstract メソッドを持つクラスには abstract class　としなくてはならないまたインスタンス化できない
  static fiscalYear = 2020;  // statis(静的な変数)インスタンスとは切り離して存在する
  // private readonly id: string;
  // name: string;
  // private employees: string[] = []; // private: は同じクラス内でしかアクセスをできない
  protected employees: string[] = [];  // protected: このクラスの外部からはアクセスできないがクラスの継承先（サブクラス）からはアクセスを許可する。

  static createEmployee(name: string) {// statis(静的なメソッド)
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) { // （class Departmentの場）
    // readonly 初期化の後に変更できない
    // this.name = n;
    // this.id = id;
    // console.log(this.fiscalYear); // staticでない部分からthisを使ってstaticにアクセスはできないthisはクラスをもとに作成されたインスタンスを指しているから
    console.log(Department.fiscalYear); //このようにstaticにアクセスする。
  }

  abstract describe(this: Department): void; // abstractメソッド: 実装はサブクラスに強制する メソッドの構造を定義、
  // {
  //   // this: Department　は変数ではないのでメソッドを呼び出す際には必要ない。型の安全性を高めている。
  //   // console.log(`Department: (${this.id}): ${this.name}`);
  // }

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfomation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  adminds: string[];
  constructor(id: string, adminds: string[]) {
    super(id, "iT"); // 他のクラスを継承したクラスにコンストラクターを追加するときにはsuperをつかってベースクラスのコンストラクターを呼び出すことができるまた super()は先に呼び出さなくてはならない。
    this.adminds = adminds;
  }

  describe() {
    console.log("IT部門 -ID:" + this.id);
  }
}

// 会計部門は一つしか作りたくない
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; // static変数

  get mostRecentReport() { // getter
    if (this.lastReport) { // thisはオブジェクトを指す
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください");
    }
    this.addreport(value);
  }
  private constructor(id: string, private reports: string[]) {
    // シングルトンパターン:objectを複数作成したくない、一つのみとしたい
    super(id, "Accounting");
    this.lastReport = reports[0]; // reports[]が空の場合はundefindedが渡される。
  }

  // static なコンストラクターをどのようにインスタンスかすれば良いか？？
  static getInstance() {
    // インスタンスがあるかどうかをチェックしてインスタンスがあれば既存のインスタンスを返す
    if (AccountingDepartment.instance) {
      return this.instance; // static メソッドの場合　this　はクラスAccountingDepartmentを指す
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  addreport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  describe() {
    // Department.describeをオーバーライド
    console.log("会計部門 - ID:" + this.id);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) { // オーバライド：ベースクラスのメソッドを上書きして独自の実装を定義できる
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

// static(静的)なメソッドを出力
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

// thisというキーワードは基本的にそのメソッドを呼び出すための責任があるオブジェクトを参照する
const it = new ITDepartment("d1", ["max"]);

it.addEmployees("Max");
it.addEmployees("Manu");
it.printEmployeeInfomation();
it.describe();

console.log(it);

// const accounting = new AccountingDepartment("A1", []);
const accounting = AccountingDepartment.getInstance(); // シングルトンパターンでの実装
accounting.mostRecentReport = "通信会計レポート";
accounting.mostRecentReport = "レポートの作成";
accounting.addreport("Something");
console.log(accounting.mostRecentReport); // getterはmostRecentReport()まるカッコはいらない。
// accounting.printReports();
accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
accounting.printEmployeeInfomation(); // 1, Manu
accounting.describe();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }; // objectリテラルでdescribeにメソッドを参照している

// accountingCopy.describe();

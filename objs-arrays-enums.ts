// const person: object = {
//     name: 'foo',
//     age: 22
// };
// console.log(person.name); // error

const person:{
    name: string;
    age: number;
} = {
    name: 'foo',
    age: 22
};

// 型推論がうまく動作している場合は型推論に乗った書き方で良い
const animal: {
    name: string;
    age: number;
    hobbies: string[];
    role:[number,string]; // タプルを宣言：並び順もこの通りとなる
} = {
    name: 'cichi',
    age: 6,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'], // (property) role: (string | number)[]型推論されている
}

animal.role.push('admin') // 注意！）タプルはプッシュは許可されてしまう
animal.role.push(100) 
console.log(animal.role)

// 代入時はエラー検知ができる
// animal.role[1] = 100; // errorになる
animal.role = [100, 'gumio']
// animal.role = [100, 'gumio', 200] // errorになる

let favoriteActivities: string[];
favoriteActivities = ['Sports']; // error
console.log(animal.name)

for (const hobby of animal.hobbies){
    console.log(hobby.toUpperCase()); // hobby.でストリングに適用可能なメソッドが表示できる
    // console.log(hobby.map()); map()はストリングでは利用できないのでerror 
}

// enum: 複数の条件分岐に便利

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// とするも良いがenumを利用して簡潔に書ける

enum Role {
    ADMIN,      // 初期値は０、初期値を５とした場合続くインデックスは６、７となる
    READ_ONLY,  // READ_ONLY = 'gugu'など文字列も代入可能
    AUTHOR      // AUTHOR = 30 など指定したい数字などもあり
}
const person2 = {
    name: 'foo',
    age: 20,
    hobbies: ['shopping', 'cooking'],
    // Admin(管理者):0 /Read only user:1 /Author(作者):2
    role:[2, 'author'],
}
if (person2.role[0] === Role.AUTHOR) {
    console.log("author")
}
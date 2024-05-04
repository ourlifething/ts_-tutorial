// unknown型
let userInput: unknown; // アンノウン型は最終的にどのような型になるかわからない場合に利用　どんな型を入れても構わない
let userName: string;

userInput = 5;
userInput = 'Max';

// useraName = userInput; // error: 型 'unknown' を型 'string' に割り当てることはできません。userInput: any;だとエラーにならない。。any型はタイプスクリプトは型をチェックしない。

// unknown型を型が指定された変数に代入するときは下のように型をチェックするようにすればエラーにはならない。unknown型は型チェックが強制される為anyよりbetter
if (typeof userInput === 'string') {
    userName = userInput;
}

// nerver型: 絶対に値を返すことがない
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError('エラーが発生しました', 500);

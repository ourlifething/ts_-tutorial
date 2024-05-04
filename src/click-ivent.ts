const button = document.querySelector('button')!; // ! でオブジェクトがnullではないとtsに伝えエラーを回避する

function clickHandler(message: string) {
    console.log('Clicked'+ message)
}
//または if(button)としてbuttonがnullではなければなどとすればエラーはでない。
// button.addEventListener('click', () => { // 'button' は 'null' の可能性があります。
//     console.log('Clicked')
// })
if (button) {
    button.addEventListener('click', clickHandler.bind(null, "you are welcome"))
}
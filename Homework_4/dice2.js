let player1 = 'Yahor';
let player2 = 'Alex';

let player1Result = 0;
let player2Result = 0;

for (let i = 0; i < 3; i++) {
    let player1Move = Math.floor(Math.random() * 6) + 1;
    console.log(player1 + ' move : ' + player1Move);
    player1Result += player1Move;

    let player2Move = Math.floor(Math.random() * 6) + 1;
    console.log(player2 + ' move: ' + player2Move);
    player2Result += player2Move;
}

console.log(player1 + ' - Result: ' + player1Result);
console.log(player2 + ' - Result: ' + player2Result);

if (player1Result > player2Result) {
    console.log('Winner is ' + player1);
} if (player2Result > player1Result) {
    console.log('Winner is ' + player2);
} else {
    console.log('standoff');
}
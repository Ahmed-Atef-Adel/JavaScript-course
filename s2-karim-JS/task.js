const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };



let [players1, players2] = game.players

// console.log(players1, players2);

let [gk1, ...fieldPlayers] = players1

// console.log(gk1, fieldPlayers);

let allPlayers = [...players1, ...players2];

// console.log(allPlayers);

let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// console.log(players1Final);

let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;

// console.log(draw);

function printGoals(...number){
  for (let i = 0; number.length > i; i++){
    console.log(number[i]);
  }
}

// printGoals(1,2,3);

game.odds.team1 < game.odds.team2 && console.log(game.team1);
game.odds.team1 > game.odds.team2 || console.log(game.team1)


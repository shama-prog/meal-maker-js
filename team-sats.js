const team = {
  _players:[
  {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 22
  },
    {
  firstName: 'Nacho',
  lastName: 'Tako',
  age: 18
  },
     {
  firstName: 'Tdad',
  lastName: 'Dinako',
  age: 30
  }
  ], 
  _games:[
    {
  opponent: 'Real Madrid',
  teamPoints: 24,
  opponentPoints: 27
},
    {
  opponent: 'Barcelona',
  teamPoints: 32,
  opponentPoints: 30
},
    {
  opponent: 'Juventus',
  teamPoints: 34,
  opponentPoints: 30
}
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(firstName, lastName, age)  {
    this._players.push({firstName, lastName, age})
  },
  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({opponent, teamPoints, opponentPoints})
  }
}

team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)


team.addGame('Argentina', 7, 7)
team.addGame('Brazil', 8, 7)
team.addGame('Germany', 6, 5)

console.log(team.players)
console.log(team.games)

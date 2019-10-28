const cardValues = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'KING': 10,
    'QUEEN': 10,
    'JACK': 10,
    'ACE': 11
}

export const cardValue = (value) => {
    return cardValues[value]
}

export const handValue = (hand) => {
    let score = 0
    hand.forEach(card => score += cardValue(card.value))
    return score
}

export const winner = (player, computer) => {
    let winner = ''
    if(player > 21) winner = 'computer'
    if(computer > 21) winner = 'player'
    if(player <= 21 && player > computer) winner = 'player'
    if(computer <= 21 && computer > player) winner = 'computer'
    if(player === computer) winner = 'Draw'
    return winner
}
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
    if(player > 21) winner = 'Computer wins'
    if(computer > 21) winner = 'Player wins'
    if(player <= 21 && player > computer) winner = 'Player wins'
    if(computer <= 21 && computer > player) winner = 'Computer wins'
    if(player === computer) winner = 'Draw'
    return winner
}
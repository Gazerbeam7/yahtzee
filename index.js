module.exports = class Game {
    static calculate(combinaison, roll)
    {
        switch (combinaison)
        {
            case 'ThreeOfAKind':
                return this.CalculateXOfAKind(roll, 3);
            case 'FourOfAKind':
                return this.CalculateXOfAKind(roll, 4);
            case 'FiveOfAKind':
                return this.CalculateXOfAKind(roll, 5);
            case 'SmallStraight':
                return this.SmallStraight(roll);
            case 'HighStraight':
                return this.HighStraight(roll);
            case 'FullHouse':
                return this.FullHouse(roll);
            default:
                return this.CalculateNumberCombination(roll, combinaison);
        }
    }

    static SmallStraight(roll)
    {
        if (roll.includes(1) && roll.includes(2) && roll.includes(3) && roll.includes(4))
        return 30;
        if (roll.includes(2) && roll.includes(3) && roll.includes(4) && roll.includes(5))
        return 30;
        if (roll.includes(3) && roll.includes(4) && roll.includes(5) && roll.includes(6))
        return 30;
        return 0;
    }

    static HighStraight(roll)
    {
        if (roll.includes(1) && roll.includes(2) && roll.includes(3) && roll.includes(4) && roll.includes(5))
            return 40;
        if (roll.includes(2) && roll.includes(3) && roll.includes(4) && roll.includes(5) && roll.includes(6))
            return 40;
        return 0;
    }

    static CalculateNumberCombination(roll, diceValue)
    {
        return diceValue * roll.filter(x => x===diceValue).length;
    }

    static CalculateXOfAKind(roll, numberDices)
    {
        for (let diceValue=1; diceValue<=6; diceValue++) {
            {
                if (roll.filter(x => x === diceValue).length >= numberDices) {
                    if (numberDices === 5)
                    {
                        return 50
                    }
                    return roll.reduce(function(a, b){
                        return a + b;
                    }, 0);
                }
            }
        }
        return 0;
    }

    static FullHouse(roll)
    {
        let found = 0;
        let foundResult2 = 0;
        let foundResult3 = 0;
        let foundResultTotal = 0;
        let three = false;
        let two = false;
        for (let j = 6; j > 0; j--) {
            found = 0;
            for (let i = 0; i < roll.length; i++) {
                if (roll[i] === j) {
                    found++;
                    foundResult2 = Math.floor(parseInt(roll[i]) * 2);
                    foundResult3 = Math.floor(parseInt(roll[i]) * 3);
                }
            }
            if (found > 1) {
                if (found === 2 && two === false) {
                    foundResultTotal += foundResult2;
                    two = true;
                }
                if (found === 3 && three === false) {
                    foundResultTotal += foundResult3;
                    three = true;
                }
                if (two === true && three === true) {
                    return 30;
                }
            }
        }
        return 0;
    }
}

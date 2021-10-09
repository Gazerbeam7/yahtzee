let grille = {1:null,2:null,3:null,4:null,5:null,6:null,sum:null,bonus:null};
let status = 'nouveau';
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

    partieStatut()
    {
        for (const property in grille) {
            if (grille[property] != null) {
                status = 'en_cours'
                return status
            }
        }
        if (status !== 'nouveau')
        {
            status = 'termine'
            return status
        }
        return status

    }

    rollDice(n){
        let result = []
        for (var i=1; i<=n; i++) {
            var randomDice = Math.floor(6*Math.random())+1;
            result.push(randomDice)
        }
        result = [ 4, 6, 5, 6, 4]
        this.registerDice(result)
    }

    registerDice(dice)
    {
        // for (const d in dice) {
        //     if (grille[property] != null) {
        //         status = 'en_cours'
        //         return status
        //     }
        // }

        console.log(dice[1])
        console.log(dice[3])
        grille[6] = 12;
        console.log(grille);
    }
}

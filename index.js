let grille = {1:null,2:null,3:null,4:null,5:null,6:null,sum:null,bonus:null};
let status = 'nouveau';
class Game {

    static CalculateOnes(roll)
    {
        return CalculateNumberCombination(roll, 1);
    }

public int CalculateTwos(int[] roll)
{
    return CalculateNumberCombination(roll, 2);
}

public int CalculateThrees(int[] roll)
{
    return CalculateNumberCombination(roll, 3);
}

private static int CalculateNumberCombination(int[] roll, int diceValue)
{
    return diceValue * roll.Count(dice => dice == diceValue);
}
    static partieStatut()
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

    static rollDice(n){
        let result = []
        for (var i=1; i<=n; i++) {
            var randomDice = Math.floor(6*Math.random())+1;
            result.push(randomDice)
        }
        result = [ 4, 6, 5, 6, 4]
        this.registerDice(result)
    }

    static registerDice(dice)
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



let grille = {1:null,2:null,3:null,4:null,5:null,6:null,sum:null,bonus:null}
let status = 'nouveau'

function partieStatut()
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

console.log(partieStatut())

rollDice(5)

function rollDice(n){
    let result = []
    for (var i=1; i<=n; i++) {
        var randomDice = Math.floor(6*Math.random())+1;
        result.push(randomDice)
    }
    result = [ 4, 6, 5, 6, 4]
    registerDice(result)
}

function registerDice(dice)
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

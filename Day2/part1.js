// A === Rock , B === Paper , C === Scissors first row and what will opponent play
// X === Rock , Y === Paper , Z === Scissors second row and what i should play
// Score count: Rock === 1, Paper === 2, Scissors === 3, 0 if lost, 3 if draw and 6 if I win
const fs = require("fs")

function getScore() {
    fs.readFile("./data.txt", (err, data) => {
        const strategy = data.toString().split(/\r?\n/)
        let totalScore = 0
        for (let round of strategy) {
            const pc = round[0]
            const me = round[2]
            if (me === "X" && pc === "A") {
                totalScore += 4
            } else if (me === "X" && pc === "B") {
                totalScore += 1
            } else if (me === "X" && pc === "C") {
                totalScore += 7
            } else if (me === "Y" && pc === "A") {
                totalScore += 8
            } else if (me === "Y" && pc === "B") {
                totalScore += 5
            } else if (me === "Y" && pc === "C") {
                totalScore += 2
            } else if (me === "Z" && pc === "A") {
                totalScore += 3
            } else if (me === "Z" && pc === "B") {
                totalScore += 9
            } else if (me === "Z" && pc === "C") {
                totalScore += 6
            }
        }
        console.log(totalScore)
    })
}

getScore()
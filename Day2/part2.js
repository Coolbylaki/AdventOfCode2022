const fs = require("fs")
// X === I need to lose, Y === I need to draw, Z === I need to win
function getScore() {
    fs.readFile("./data.txt", (err, data) => {
        const strategy = data.toString().split(/\r?\n/)
        let totalScore = 0
        const rock = "A"
        const paper = "B"
        const scissors = "C"
        for (let round of strategy) {
            const pc = round[0]
            const end = round[2]
            if (end === "X" && pc === rock) {
                totalScore += 3
            } else if (end === "X" && pc === paper) {
                totalScore += 1
            } else if (end === "X" && pc === scissors) {
                totalScore += 2
            } else if (end === "Y" && pc === rock) {
                totalScore += 4
            } else if (end === "Y" && pc === paper) {
                totalScore += 5
            } else if (end === "Y" && pc === scissors) {
                totalScore += 6
            } else if (end === "Z" && pc === rock) {
                totalScore += 8
            } else if (end === "Z" && pc === paper) {
                totalScore += 9
            } else if (end === "Z" && pc === scissors) {
                totalScore += 7
            }
        }
        console.log(totalScore)
    })
}

getScore()
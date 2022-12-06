const fs = require("fs")
// Every rucksack has two compartments. Every word is split in half to represent first and second compartment.
const priorityList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

fs.readFile("./data.txt", (err, data) => {
    const rucksacks = data.toString().split(/\r?\n/)
    const firstHalfList = []
    const secondHalfList = []
    let totalScore = 0

    // Make two halves
    for (let ruck of rucksacks) {
        const firstHalf = ruck.slice(0, ruck.length / 2)
        const secondHalf = ruck.slice(ruck.length / 2)
        firstHalfList.push(firstHalf)
        secondHalfList.push(secondHalf)
    }

    // Find all scores
    for (let i = 0; i < firstHalfList.length; i++) {
        for (let char of firstHalfList[i]) {
            if (secondHalfList[i].includes(char)) {
                const index = alphabet.indexOf(char.toLowerCase())
                if (char === char.toUpperCase()) {
                    totalScore += priorityList[index] + 26
                } else {
                    totalScore += priorityList[index]
                }
                break
            }
        }
    }

    console.log(totalScore)
})
const fs = require("fs")

const pairs = fs.readFileSync("./data.txt", { encoding: 'utf8', flag: 'r' }).split("\n")
const leftPairs = []
const rightPairs = []
let total = 0
let leftListManipulation = []
let rightListManipulation = []

for (let pair of pairs) {
    const index = pair.indexOf(",")
    leftPairs.push(pair.slice(0, index))
    rightPairs.push(pair.slice(index + 1))
}

for (let i = 0; i < pairs.length; i++) {
    let leftFirst = parseInt(leftPairs[i].split("-")[0])
    let leftSecond = parseInt(leftPairs[i].split("-")[1])
    let rightFirst = parseInt(rightPairs[i].split("-")[0])
    let rightSecond = parseInt(rightPairs[i].split("-")[1])

    for (let j = leftFirst; j <= leftSecond; j++) {
        leftListManipulation.push(j)
    }
    for (let b = rightFirst; b <= rightSecond; b++) {
        rightListManipulation.push(b)
    }

    if (leftListManipulation.includes(rightFirst) || leftListManipulation.includes(rightSecond)) {
        total += 1
    } else if (rightListManipulation.includes(leftFirst) || rightListManipulation.includes(leftSecond)) {
        total += 1
    }

    leftListManipulation = []
    rightListManipulation = []
}

console.log(total)
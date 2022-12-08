const fs = require("fs")

const pairs = fs.readFileSync("./data.txt", { encoding: 'utf8', flag: 'r' }).split("\n")
const leftPairs = []
const rightPairs = []
let total = 0

for (let pair of pairs) {
    const index = pair.indexOf(",")
    leftPairs.push(pair.slice(0, index))
    rightPairs.push(pair.slice(index + 1))
}

for (let i = 0; i < pairs.length; i++) {
    if (parseInt(leftPairs[i].split("-")[0]) <= parseInt(rightPairs[i].split("-")[0]) && parseInt(leftPairs[i].split("-")[1]) >= parseInt(rightPairs[i].split("-")[1])) {
        total += 1
    } else if (parseInt(rightPairs[i].split("-")[0]) <= parseInt(leftPairs[i].split("-")[0]) && parseInt(rightPairs[i].split("-")[1]) >= parseInt(leftPairs[i].split("-")[1])) {
        total += 1
    }
}

console.log(total)
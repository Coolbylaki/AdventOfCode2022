// Find the top 3 elves total calorie count
const fs = require("fs")

function getTopThreeCalories() {
    fs.readFile("./input.txt", (err, data) => {
        const calories = data.toString().split(/\r?\n/)
        let elfCalories = 0
        const allCalories = []
        const topThree = []
        for (let calorie of calories) {
            if (calorie === "") {
                allCalories.push(elfCalories)
                elfCalories = 0
            } else {
                elfCalories += parseInt(calorie)
            }
        }
        while (topThree.length !== 3) {
            const maxCalorieElf = Math.max(...allCalories)
            topThree.push(maxCalorieElf)
            const indexToBeRemoved = allCalories.indexOf(maxCalorieElf)
            allCalories.splice(indexToBeRemoved, 1)
        }
        const total = topThree.reduce((sum, item) => sum + item)
        console.log(total)
    })
}

getTopThreeCalories()
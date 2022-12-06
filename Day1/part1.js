// Space is separation from other elf inventory
const fs = require("fs")
// Calculate each elf calorie count in inventory and find the elf who is carrying most calories
function getCalories() {
    fs.readFile("./input.txt", (err, data) => {
        const calories = data.toString().split(/\r?\n/)
        let elfCalories = 0
        const allCalories = []
        for (let calorie of calories) {
            if (calorie === "") {
                allCalories.push(elfCalories)
                elfCalories = 0
            } else {
                elfCalories += parseInt(calorie)
            }
        }
        const maxCalorie = Math.max(...allCalories)
        console.log(maxCalorie)
    })
}

getCalories()
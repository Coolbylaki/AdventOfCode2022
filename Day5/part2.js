const fs = require("fs");

const data = fs.readFileSync("./data.txt", { encoding: "utf8", flag: "r" }).split("\n");

const crates = {
	1: ["W", "D", "G", "B", "H", "R", "V"],
	2: ["J", "N", "G", "C", "R", "F"],
	3: ["L", "S", "F", "H", "D", "N", "J"],
	4: ["J", "D", "S", "V"],
	5: ["S", "H", "D", "R", "Q", "W", "N", "V"],
	6: ["P", "G", "H", "C", "M"],
	7: ["F", "J", "B", "G", "L", "Z", "H", "C"],
	8: ["S", "J", "R"],
	9: ["L", "G", "S", "R", "B", "N", "V", "M"],
};

for (let i = 0; i < data.length; i++) {
	const stripped = data[i].replace(/\D+/g, "").split("");
	if (stripped.length === 4) {
		data[i] = [stripped[0] + stripped[1], stripped[2], stripped[3]];
	} else {
		data[i] = stripped;
	}
}

for (let i = 0; i < data.length; i++) {
	const numbers = data[i];
	const temp = crates[numbers[1]].splice(crates[numbers[1]].length - numbers[0]);
	crates[numbers[2]] = crates[numbers[2]].concat(temp);
}

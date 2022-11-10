//宇得示範
let star = "★"
let lineStarNum

const layers = prompt("星星塔數！")

for (let i = 0; i < layers; i++) {
    let lineStar = ""

    // lineStar compute
    lineStarNum = layers - 1 - i
    for (let j = 0; j < lineStarNum; j++) {
        lineStar += "☆"
    }

    // output
    document.write(lineStar)
    document.write(star)
    document.write(lineStar)
    document.write("<br>")

    // star compute
    for (let k = 0; k < 2; k++) star += "★"
}
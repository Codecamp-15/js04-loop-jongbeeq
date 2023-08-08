let icon = ""

for (let n = 1; n <= 4; n++) {

    for (let a = 1; a <= n ; a++)
        icon = icon + "*    "

    icon = icon +"\n"
}

console.log(icon);
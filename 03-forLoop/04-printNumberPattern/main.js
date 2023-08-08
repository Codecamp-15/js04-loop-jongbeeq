let str = ""

for (i = 1; i <= 8; i++) {

    for (j = 1; j <= i; j++) {
        str = str + String(j)
    }

    str = str + "\n"
}

console.log(str)
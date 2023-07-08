function stringToUpperCase(string) {
    return string.split(" ").map((w) => w.toUpperCase()).join(" ")
}



console.log(stringToUpperCase("But if you're too drunk to drive And the music is right She might let you stay But just for the night..."));
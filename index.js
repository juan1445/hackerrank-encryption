function encryption(s) {
    s = s.split(" ").join("");
    var columnas = Math.ceil(Math.sqrt(s.length));
    var finalString = "";
    for (var i = 0; i < columnas; i++) {
        for (var j = i; j < s.length; j += columnas) {
            finalString += s[j];
        }
        finalString += " ";
    }
    return finalString;
}


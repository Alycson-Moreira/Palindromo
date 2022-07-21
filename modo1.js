function verificaPalindromo(string){
    if (!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ana"));
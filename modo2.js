function verificaPalindromo2(string) {
    if (!string) {
        alert("string inválida");
        iniciar();
    }else if(string === " "){
        alert("Palavra digitada VAZIA, digite outra palavra...");
        iniciar();
    }else{

        alert(`palavra a verificar é: ${string}`);
        for (let i = 0; i < string.length; i++) {
        
            if (string[i] !== string[string.length - 1 -i]){
                //console.log(string[i] + " = " + string[string.length - 1 -i] + " ?");
                console.log(false);
                ePalindromo = false;
            } else{
                    ePalindromo = true;
                  }
        }

        if (ePalindromo) {
            alert((`a Palavra:" ${string}" é um palindromo : ${string.split("").reverse().join("")}`));
        }else{
                alert((`a Palavra:" ${string}" não é um palindromo : ${string.split("").reverse().join("")}`));
             }    
    }

    
    //return alert(`a Palavra ${string} é um palindromo = ${string.split("").reverse()}`);
}

let ePalindromo;

function iniciar(){
    verificaPalindromo2(prompt("Digite a palavra para verificar se é palindromo: "));
}

iniciar();
function perguntaridade () {
const nome = document.getElementById("nome").value

if(nome){
    document.querySelector(".etapa1").style.display = "none";
    document.querySelector(".etapa2").style.display = "block";
  }
else{
    alert("por favor digite seu nome")
  }
}

function finalizarconversa() {
    const idade = document.getElementById("idade").value;
    const nome = document.getElementById("nome").value;

    if (idade) {
        let mensagem;
        if (idade < 18) {
            mensagem = `Oi ${nome}! Você é jovem, aproveite muito sua juventude!`;
        } else {
            mensagem = `olá ${nome}! Que bom ver você por aqui, com toda a sua experiência de vida!`;
        }

        document.querySelector(".etapa2").style.display = "none";
        document.getElementById("etapa3").style.display = "block";
        document.getElementById("mensagem").innerText = mensagem;
    } else {
        alert("Por favor, digite sua idade.");
    }
}
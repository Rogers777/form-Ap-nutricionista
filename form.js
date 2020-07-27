
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var  paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = document.createElement("tr");
    

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var erro = validaPaciente(paciente);

    if(erro.length >0){
                
        exibeMensagensDeErro(erros);

        return;
    }



   var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    tabela.appendChild(pacienteTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";


    function validaPaciente(paciente) {
        if (validaPeso(paciente.peso)) {
                return "";
        } else {
            return "O peso é invalido";
        }
    }
});

function exibeMensagensDeErro(erros){

 var ul = document.querySelector("#mensagens-erro");
 erros.forEach(function(erro){


    var li = document.creatElement ("li");
    li.textContent= erro;

    ul.appendChild(li);
});

function obtemPacienteDoFormulario(form) {

    var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}

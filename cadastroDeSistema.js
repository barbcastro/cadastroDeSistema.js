
const dataDoEvento = new Date ('2020-06-19');
let dataAtual = new Date ('2020-05-25');

    if (dataDoEvento > dataAtual)
        {
            console.log('Permitir cadastro no evento!');
        }
    else 
        {
            console.log('Cadastro não permitido por data inválida!');
        }



let idadeDoParticipante = 18;

    if (idadeDoParticipante >= 18)
        {
            console.log('Permitir cadastro no evento!');
        }
    else
        {
            console.log ('Cadastro permitido somente para maiores de 18 anos!');
        }



let totaldeDeParticipantes = 100;
    if (totaldeDeParticipantes <= 100)
        {
            console.log ('Permitir cadastro!');
        }
    else 
        {
            console.log ('Cadastro não permitido por número de participantes excedido!');
        }


const palestrante = "LUIZ"
let listaParticipantes = ['Barbara', 'Breno', 'Fabiola', 'Elaine']
        {
    console.log("Palestrante: " + palestrante);
        }

    for (let nome of listaParticipantes)
        {
        console.log(nome);
        }

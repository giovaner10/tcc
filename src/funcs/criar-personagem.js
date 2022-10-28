export function criarCresim(nome, aspiracao){
    const cresim = {

        nome: nome,
        dataNascimento: Date.now(),
        dataMorte: Date.now() + 36000000,
        dinheiroCresceleons: 1500,
        aspiracao: aspiracao,
        tarefaOcupacao: 'trabalhando',
        ocupado: false,
        pontosHigiene: 28,
        pontosEnergia: 32

    }

    return cresim
}



export function selecionarAspiracao(valorAspiracao){
    let aspiracao = ''

      switch (valorAspiracao){
        case 1:
          aspiracao = 'GASTRONOMIA'
          break;
        case 2:
          aspiracao = 'PINTURA'
          break;
        case 3:
          aspiracao = 'JOGOS'
          break;

        case 4:
          aspiracao = 'JARDINAGEM'
          break;

        case 5:
          aspiracao = 'MUSICA'
          break;

        default:
          break;
      }

      return aspiracao
}
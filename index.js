import { useQuestion } from './src/services/question/use-question'
import { useLocalStorage } from './src/services/local-storage/use-local-storage'
import { criarCresim, selecionarAspiracao } from './src/funcs/criar-personagem'

const main = async () => {
  const localStorage = useLocalStorage()
  localStorage.setObject('obj-array', [])




  while (true) {
    console.log('Bem vindo ao The Cresim')
    let opcao = await useQuestion(`1 - Adicionar novo Cresim \n2 - Dormir`)



    if (opcao == 1) {

      let nome = await useQuestion(`Insera o nome do seu Cresim`)

      let valorAspiracao = await useQuestion(`escolha uma aspiracao para o se Cresim: 1 - GASTRONOMIA, 2 - PINTURA, 3 - JOGOS, 4 - JARDINAGEM, 5 - MUSICA`)

      let cresimCriado = criarCresim(nome, selecionarAspiracao(parseInt(valorAspiracao)))

      localStorage.setObject('obj-array', [ ...localStorage.getObject('obj-array'), cresimCriado])

      console.log(localStorage.getObject('obj-array'))

    }



  }


  // localStorage.setString('nome-string', nome)
  // localStorage.setObject('nome-obj', { nome })
  // localStorage.setObject('nome-array', [{nome}])

  //localStorage.setObject('nome-array', [ ...localStorage.getObject('nome-array'), { nome }])

  // console.log(localStorage.getString('nome-string'))
  // console.log(localStorage.getObject('nome-obj'))
  // console.log(localStorage.getObject('nome-array'))
}

main()
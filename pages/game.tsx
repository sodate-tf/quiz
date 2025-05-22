import Questionario from "@/components/Questionario"
import QuestaoModel from "@/model/questao"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const BASE_URL ='https://quiz-five-liard.vercel.app/api'
//const BASE_URL ='http://localhost:3000/api'

export default function Game() {
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [idsDasQuestoes, setIdDasQuestoes] = useState<number[]>([]);
  const [respostasCertas, setRespostasCertas] = useState<number>(0)
  const router = useRouter()

  async function carregarIdsQuestoes(){
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdDasQuestoes(idsDasQuestoes)
  }
  
  async function carregarQuestao(idQuestao: number){
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }

  useEffect(() =>{
     carregarIdsQuestoes()
  }, [])

  
  useEffect(() =>{
    if(idsDasQuestoes.length > 0)
      carregarQuestao(idsDasQuestoes[0])
  
 }, [idsDasQuestoes]) 

  function questaoRespondida(questaoRespondida :QuestaoModel){
     setQuestao(questaoRespondida)
     const acertou = questaoRespondida.acertou
     setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }
  function irPraProximoPasso(){
      const proximoId = idProximaPergunta()
      if(proximoId) 
         irPraProximaQuestao(proximoId) 
      else
         finalizar()
  }
  function irPraProximaQuestao(proximoId : number){
     carregarQuestao(proximoId)
  }
  function finalizar(){
     router.push({
      pathname: "/resultado",
      query:{
         total: idsDasQuestoes.length,
         certas: respostasCertas
      }
     })
  }
function idProximaPergunta(){
    if (!questao) {
      return undefined; // Retorna undefined se 'questao' for null
    }
    else{
        if (idsDasQuestoes.indexOf(questao.id) +1 === idsDasQuestoes.length){
          return undefined
        }
        else{
          const proximoIndice = idsDasQuestoes.indexOf(questao.id) +1
          return idsDasQuestoes[proximoIndice]
      }
     }
  }

  return questao ? (
      <Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  ): false
    

}

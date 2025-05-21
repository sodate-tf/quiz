import QuestaoModel from "@/model/questao";
import styles from "@/styles/Questao.module.css"
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporiador from "./Temporizador";
const letras =[
    {valor: 'A', cor: '#F3C966'},
    {valor: 'B', cor: '#F266BA'},
    {valor: 'C', cor: '#85D4F2'},
    {valor: 'D', cor: '#BCE596'}
]
interface QuestaoProps{
    valor: QuestaoModel
    tempoPraResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}
export default function Questao(props : QuestaoProps){
    const questao = props.valor

    function retornaKey(){
        const numeroFloat = Math.random() * 10000;
        const numeroInteiro = Math.floor(numeroFloat);
        return numeroInteiro + 1;
    }
    function renderizarRespostas(){
        return questao.respostas.map((resposta, i) => {
           return <Resposta 
                key={retornaKey()}
                valor={resposta}
                indice={i}
                letra= {letras[i].valor}
                corFundoLetra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
            />
        }) 
    }
    return(
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado}/>
            <Temporiador 
                duracao={props.tempoPraResposta ?? 10} tempoEsgotado={props.tempoEsgotado}
                chave={retornaKey()}    
            />
            {renderizarRespostas()}
        </div>
    )
}
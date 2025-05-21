import { useEffect, useState } from "react"
import RespostaModel from "../model/resposta"
import styles from  "../styles/Resposta.module.css"

interface RespostaProps{
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}
export default function Resposta(props: RespostaProps){
    const resposta = props.valor
    function animarResposta(){
        setRespostaRevelada(resposta.revelada ? 'rotateY(180deg)' : '')
    }
    const [respostaRevelada, setRespostaRevelada] = useState('')

    useEffect(()=>{
      animarResposta()
    }, [respostaRevelada])
    return(
        <div className={styles.resposta} onClick={() => props.respostaFornecida(props.indice)}>
            <div className={`${styles.conteudoResposta}`} style={{
                transform: respostaRevelada
            }}>
                <div className={styles.frente}>
                    <div className={styles.letra} style={{ backgroundColor: props.corFundoLetra }}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>{resposta.valor}</div>
                </div>
                <div className={styles.verso}>
                    {resposta.certa ? (
                        <div className={styles.certa}>
                            <div>A resposta certa é ...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    ) : (
                        <div className={styles.errada}>
                            <div>A Resposta informada está errada ...</div>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
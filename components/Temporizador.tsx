import styles from '@/styles/Temporizador.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
interface TemporiadorProps{
    chave: number
    duracao: number
    tempoEsgotado: () => void
}
export default function Temporiador(props : TemporiadorProps){
    return(
        <div className={styles.temporizador}>
                <CountdownCircleTimer 
                size={120}
                key={props.chave}
                isPlaying
                duration={props.duracao}
                onComplete={props.tempoEsgotado}
                colors={[
                    '#BCE596',
                    '#F7B801',
                    '#ED827A',
                  ]}
                  colorsTime={[7, 5, 3]}
                >
                {({remainingTime }) =>remainingTime}
               </CountdownCircleTimer>
                
        </div>
    )
}
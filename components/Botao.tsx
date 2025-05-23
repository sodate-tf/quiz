import styles from '@/styles/Botao.module.css'
import Link from 'next/link'
interface BotaoProps{
   href?: string
   texto: string
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export default function Botao(props: BotaoProps){
    function renderizarBotao() {
        return(
        <button className={styles.botao}
            onClick={props.onClick}>
               {props.texto}
           </button>
        )
    }
    return props.href ? (
        <Link href={props.href}>
            {renderizarBotao()}
        </Link>
    ) : renderizarBotao()
}
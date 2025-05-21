import Botao from "@/components/Botao";
import style from '@/styles/Home.module.css'
export default function Home(){
   return(
    <div className={style.start}>
        <div className={style.tituloInicio}>COMEÇAR O JOGO!</div>
        <Botao texto="START!" href="/game" />
    </div>
   )
}
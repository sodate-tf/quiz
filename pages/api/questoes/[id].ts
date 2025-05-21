import questoes from '../bancoDeQuestoes'
import { NextApiRequest, NextApiResponse } from 'next';
export default function Questoes(req: NextApiRequest, res: NextApiResponse) {
    const idSelecionado = +(req.query.id || 0)
    const unicaQuetaoOuNada = questoes.filter(questao => questao.id === idSelecionado)
    if(unicaQuetaoOuNada.length === 1){
        const questaoSelecionada = unicaQuetaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.paraObjeto())
    }else{
        res.status(204).send('')
    }

    res.status(200).json(questoes[0].paraObjeto())
}

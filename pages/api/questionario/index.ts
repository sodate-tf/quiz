import { embaralhar } from "@/functions/arrays"
import { NextApiResponse, NextApiRequest } from 'next';
import questoes from "../bancoDeQuestoes"
export default function QuestionarioIndex(req: NextApiRequest, res: NextApiResponse)  {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}
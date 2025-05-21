import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] =[
    new QuestaoModel(306, 'Qual bicho transmite a doença de chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
      ]),
      new QuestaoModel(307, 'Qual fruto é conhecido no norte e nordeste como "Jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
      ]),
      new QuestaoModel(308, "Qual é o coletivo de cães?", [
        RespostaModel.certa("Matilha"),
        RespostaModel.errada("Alcateia"),
        RespostaModel.errada("Manada"),
        RespostaModel.errada("Cinhomose"),
      ]),
      new QuestaoModel(309, "Qual é a capital do Acre?", [
        RespostaModel.errada("Porto Velho"),
        RespostaModel.errada("Manaus"),
        RespostaModel.certa("Rio Branco"),
        RespostaModel.errada("Cruzeiro do Sul"),
      ]),
      new QuestaoModel(310, "Qual é o maior rio do mundo?", [
        RespostaModel.errada("Rio Nilo"),
        RespostaModel.errada("Rio Mississipi"),
        RespostaModel.errada("Rio Yangtzé"),
        RespostaModel.certa("Rio Amazonas"),
      ]),
      new QuestaoModel(311, "Qual é a montanha mais alta do mundo?", [
        RespostaModel.errada("Monte Kilimanjaro"),
        RespostaModel.errada("Monte Fuji"),
        RespostaModel.errada("Monte McKinley"),
        RespostaModel.certa("Monte Everest"),
      ]),
      new QuestaoModel(312, "Qual é o menor país do mundo?", [
        RespostaModel.errada("Mônaco"),
        RespostaModel.errada("Nauru"),
        RespostaModel.errada("San Marino"),
        RespostaModel.certa("Vaticano"),
      ]),
      new QuestaoModel(313, "Qual é o símbolo químico do ouro?", [
        RespostaModel.errada("Ag"),
        RespostaModel.errada("Fe"),
        RespostaModel.errada("Cu"),
        RespostaModel.certa("Au"),
      ]),
      new QuestaoModel(314, "Qual é o planeta mais próximo do sol?", [
        RespostaModel.errada("Vênus"),
        RespostaModel.errada("Marte"),
        RespostaModel.errada("Terra"),
        RespostaModel.certa("Mercúrio"),
      ]),
      new QuestaoModel(315, "Qual é o animal mais rápido do mundo?", [
        RespostaModel.errada("Leão"),
        RespostaModel.errada("Tigre"),
        RespostaModel.errada("Guepardo"),
        RespostaModel.certa("Falcão-peregrino"),
      ]),
      new QuestaoModel(316, "Quem pintou a Mona Lisa?", [
        RespostaModel.errada("Vincent van Gogh"),
        RespostaModel.errada("Pablo Picasso"),
        RespostaModel.errada("Claude Monet"),
        RespostaModel.certa("Leonardo da Vinci"),
      ]),
      new QuestaoModel(317, "Qual é a capital da França?", [
        RespostaModel.errada("Londres"),
        RespostaModel.errada("Roma"),
        RespostaModel.errada("Berlim"),
        RespostaModel.certa("Paris"),
      ]),
      new QuestaoModel(318, "Qual é o maior oceano da Terra?", [
        RespostaModel.errada("Oceano Atlântico"),
        RespostaModel.errada("Oceano Índico"),
        RespostaModel.errada("Oceano Ártico"),
        RespostaModel.certa("Oceano Pacífico"),
      ]),
        new QuestaoModel(319, "Qual destes não é uma linguagem de programação?", [
        RespostaModel.errada("JavaScript"),
        RespostaModel.errada("Python"),
        RespostaModel.errada("Java"),
        RespostaModel.certa("HTML"),
      ]),
      new QuestaoModel(320, "Qual é o nome do primeiro homem a pisar na Lua?", [
        RespostaModel.errada("Buzz Aldrin"),
        RespostaModel.errada("Yuri Gagarin"),
        RespostaModel.errada("Neil Armstrong"),
        RespostaModel.certa("Charles Duke"),
      ]),
    ]

export default questoes
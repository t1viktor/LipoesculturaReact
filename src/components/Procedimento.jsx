const descProcedimento = "A lipoescultura é um procedimento cirúrgico que visa remover gordura localizada e, muitas vezes, transferi-la para áreas que necessitam de mais contorno, proporcionando um resultado mais harmônico ao corpo. O pós-operatório é uma fase fundamental para atingir o resultado desejado, exigindo cuidados específicos para uma recuperação confortável, segura e com os melhores resultados.";

const tituloProcCard01 = "Cuidados Imediatos e Gerais";
const tituloProcCard02 = "Cuidados com a Alimentação";
const tituloProcCard03 = "Higiene e Cuidados com a Ferida Operatória";
const tituloProcCard04 = "Uso da Malha de Compressão e Meias de Compressão";

const descProcCard01 = "Repouso relativo, movimentação suave e observação de sinais de alerta são essenciais nos primeiros dias para uma recuperação segura após a lipoescultura.";
const descProcCard02 = "Alimentação balanceada com proteínas magras, frutas, legumes e fibras ajuda na cicatrização, enquanto alimentos ricos em sódio, açúcares e frituras devem ser evitados.";
const descProcCard03 = "Higiene adequada da área operada, com banhos mornos, troca de curativos e secagem cuidadosa, é fundamental para evitar infecções e garantir uma boa cicatrização.";
const descProcCard04 = "Uso contínuo da malha de compressão e meias de compressão nos primeiros 30 dias ajuda a reduzir inchaço, modelar o corpo e prevenir complicações como trombose.";
export default function Procedimento() {
    return (
        <div id="procedimento" className="min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex flex-col items-center justify-center px-3 space-y-20 py-12">
            <h1 className="text-orange-200 text-5xl max-lg:text-3xl">O Procedimento</h1>
            <p className="text-orange-100 text-2xl text-center px-26 max-lg:px-8 max-lg:text-xl">{descProcedimento}</p>

            <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1 justify-items-center"> 

                <div className="procCard cardProcHover">
                    <h2 className="numProcCard">01</h2>
                    <h2 className="h2ProcCard">{tituloProcCard01}</h2>
                    <p className="pProcCard">{descProcCard01}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

                <div className="procCard">
                    <h2 className="numProcCard">02</h2>
                    <h2 className="h2ProcCard">{tituloProcCard02}</h2>
                    <p className="pProcCard">{descProcCard02}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

                <div className="procCard">
                    <h2 className="numProcCard">03</h2>
                    <h2 className="h2ProcCard">{tituloProcCard03}</h2>
                    <p className="pProcCard">{descProcCard03}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

                <div className="procCard">
                    <h2 className="numProcCard">04</h2>
                    <h2 className="h2ProcCard">{tituloProcCard04}</h2>
                    <p className="pProcCard">{descProcCard04}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

            </div>
        </div>
    )
}

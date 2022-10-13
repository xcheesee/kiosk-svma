import BotaoWrapper from "./components/BotaoWrapper"
import DefaultLayout from "./DefaultLayout"

export default function Encerrado () {
    return (
        <DefaultLayout 
            header={<>Uma nova aba sera aberta em breve com o servico solicitado</>}
        >
            <p className="text-4xl py-20">Apos encerrar, clique no botao para encerrar o atendimento</p>
            <div className="flex justify-center">
                <BotaoWrapper ImgName={'EncerraAtendimento.png'} />
            </div>
            
        </DefaultLayout>
    )
}
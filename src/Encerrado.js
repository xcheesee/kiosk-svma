import BotaoWrapper from "./components/BotaoWrapper"
import DefaultLayout from "./DefaultLayout"
import Header from "./components/Header"
import Body from "./components/Body"

export default function Encerrado () {
    return (
        <>
            <Header>
                Uma nova aba sera aberta em breve com o servico solicitado
            </Header>
            <Body
                desc={'Apos encerrar, clique no botao para encerrar o atendimento'}
            >
                <div className="flex justify-center">
                    <BotaoWrapper ImgName={'EncerraAtendimento.png'} />
                </div>
            </Body>
        </>
    )
}
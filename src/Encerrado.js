import BotaoWrapper from "./components/BotaoWrapper"
import Header from "./components/Header"
import Body from "./components/Body"

export default function Encerrado ({opacity, setOpacity}) {
    return (
        <>
            <Header>
                Uma nova aba sera aberta em breve com o servico solicitado
            </Header>
            <Body
                desc={'Apos encerrar, clique no botao para encerrar o atendimento'}
                opacity={opacity}
                setOpacity={setOpacity}
            >
                <div className="flex justify-center">
                    <BotaoWrapper ImgName={'EncerraAtendimento.png'} />
                </div>
            </Body>
        </>
    )
}
import { useLocation } from "react-router-dom";
import SolicitOptions from "./SolicitOptions";
import Header from './components/Header'
import Body from "./components/Body";

export default function Atendimento () {
    const atendimentoData = useLocation()
    
    return (
        <>
            <Header>
                {atendimentoData.state.opcao}
            </Header>
            <Body
                desc={'Clique na opcao desejada:'}
            >
                <SolicitOptions
                    options={atendimentoData.state.servicos}
                />
            </Body>
        </>
    )
}
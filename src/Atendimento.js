import { useLocation } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import SolicitOptions from "./SolicitOptions";

export default function Atendimento () {
    const atendimentoData = useLocation()
    
    return (
        <DefaultLayout
            header={atendimentoData.state.opcao}
        >
            <p className="pt-10 text-4xl">Clique na opcao desejada:</p>
            <SolicitOptions
                options={atendimentoData.state.servicos}
            />
        </DefaultLayout>
    )
}
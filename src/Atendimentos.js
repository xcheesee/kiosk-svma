import BotaoWrapper from "./components/BotaoWrapper";
import Header from "./components/Header";
import Body from './components/Body'
import DelayedLinkWithFadeout from "./components/utils/DelayedLinkWithFadeout";

const Atendimentos = ({opacity, setOpacity}) => {

    const atendimentos = [
        {
            opcao: "Arvore em area externa",
            foto: 'ArvoreExterna.png',
            servicos: 
            [
                'Denunciar poda ou remocao nao autorizada',
                'Solicitar avaliacao em calcadas e pracas para fins de poda ou remocao',
            ],
            links: 
            [
                'https://www.google.com',
                'https://www.duckduckgo.com'
            ]
        },
        {
            opcao: "Arvore em area Interna",
            foto: 'ArvoreInterna.png',
            servicos: 
            [
                'Comunicar poda a prefeitura',
                'Comunicar remocao ou poda emergencial a prefeitura',
                'Solicitar avaliacao da prefeitura',
                'Solicitar autorizacao para remocao de arvore com apresentacao de laudo',
            ],
            links: 
            [
                'https://www.google.com',
                'https://www.duckduckgo.com',
                'https://www.google.com',
                'https://www.google.com',
            ]
        },
        {
            opcao: "Assinatura de E-Mail",
            foto: 'Assinatura.png',
            servicos: [],
            links: [],
        },
        {
            opcao: "Certidao Negativa",
            foto: 'CertidaoNegativa.png',
            servicos: [],
            links: [],
        },
        {
            opcao: "CG Candidato",
            foto: 'CGCandidato.png',
            servicos: [],
            links: [],
        },
        {
            opcao: "CG Eleitor",
            foto: 'CGEleitor.png',
            servicos: [],
            links: [],
        },
        {
            opcao: "Denuncias",
            foto: 'Denuncias.png',
            servicos: [],
            links: [],
        },
        {
            opcao: "Limpeza de Corrego",
            foto: 'LimpezaDeCorrego.png',
            servicos: [],
            links: [],
        },
    ]

    return (
        <>
            <Header>
                Terminal de <strong>Atendimento</strong>
            </Header>
            <Body
                desc={'Clique na opcao desejada:'}
                opacity={opacity}
                setOpacity={setOpacity}
            >
                <div className="grid grid-cols-[max-content_max-content_max-content_max-content_max-content] gap-4">
                    {
                        atendimentos
                            .map(atendimento =>
                            <DelayedLinkWithFadeout
                                to={atendimento.servicos.length !== 0 ? 'pog' : '/solicitacao'}
                                state={
                                    {
                                        opcao: atendimento.opcao,
                                        servicos: atendimento.servicos,
                                        links: atendimento.links,
                                }}
                                delay={1000}
                            >
                                    <BotaoWrapper
                                        ImgName={atendimento.foto}
                                        servicos={atendimento.servicos}
                                    />
                            </DelayedLinkWithFadeout>)
                    }
                </div>
            </Body>
        </>
    )
}

export default Atendimentos
import DefaultLayout from "./DefaultLayout";
import BotaoWrapper from "./components/BotaoWrapper";
import ArvoreExterna from "./mockups/botoes/ArvoreExterna.png"

const Atendimentos = () => {
    return (
        <DefaultLayout
            header={<>Terminal de <strong>Atendimento</strong></>}
        >
            <div className="grid grid-cols-4">
                <BotaoWrapper ImgName={"ArvoreExterna.png"}/>
                <BotaoWrapper ImgName={"ArvoreInterna.png"}/>
                <BotaoWrapper ImgName={"Assinatura.png"}/>
                <BotaoWrapper ImgName={"Assinatura.png"}/>
            </div>
        </DefaultLayout>
    )
}

export default Atendimentos
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Atendimento from "./Atendimento";
import Atendimentos from './Atendimentos';
import Layout from "./components/Layout";
import Encerrado from "./Encerrado";
import OpacityProvider from  './components/utils/opacity'

const RouteSwitch = () => {
    // const opacity = {
    //     full: "opacity-100",
    //     hidden: "opacity-0"
    // }

    // const OpacityContext = createContext({
    //     opacity: opacity.hidden,
    //     toggleOpacity: () => opacity == opacity.hidden ? opacity.full : opacity.hidden
    // })
    // const [opacity, setOpacity] = useState('opacity-0')
    return (
        <BrowserRouter>
        <OpacityProvider >
            <Layout>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/atendimento" element={<Atendimentos />} />
                    <Route path="/solicitacao" element={<Encerrado />} />
                    <Route path='atendimento/pog' element={<Atendimento />} />
                </Routes>
            </Layout>
        </OpacityProvider >
        </BrowserRouter>
    )
}

export default RouteSwitch
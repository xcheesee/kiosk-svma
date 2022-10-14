import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Atendimento from "./Atendimento";
import Atendimentos from './Atendimentos';
import Layout from "./components/Layout";
import Encerrado from "./Encerrado";
import OpacityProvider from  './components/utils/opacity'

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Layout>
        <OpacityProvider >
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/atendimento" element={<Atendimentos />} />
                    <Route path="/solicitacao" element={<Encerrado />} />
                    <Route path='atendimento/pog' element={<Atendimento />} />
                </Routes>
        </OpacityProvider >
            </Layout>
        </BrowserRouter>
    )
}

export default RouteSwitch
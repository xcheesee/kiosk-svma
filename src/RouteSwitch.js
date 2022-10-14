import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Atendimento from "./Atendimento";
import Atendimentos from './Atendimentos';
import Layout from "./components/Layout";
import Encerrado from "./Encerrado";

const RouteSwitch = () => {
    const [opacity, setOpacity] = useState('opacity-0')
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<App opacity={opacity} setOpacity={setOpacity} />} />
                    <Route path="/atendimento" element={<Atendimentos opacity={opacity} setOpacity={setOpacity} />} />
                    <Route path="/solicitacao" element={<Encerrado opacity={opacity} setOpacity={setOpacity} />} />
                    <Route path='atendimento/pog' element={<Atendimento opacity={opacity} setOpacity={setOpacity} />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default RouteSwitch
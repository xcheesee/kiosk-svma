import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Atendimento from "./Atendimento";
import Atendimentos from './Atendimentos';
import Encerrado from "./Encerrado";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/atendimento" element={<Atendimentos />} />
                <Route path="/solicitacao" element={<Encerrado />} />
                <Route path='atendimento/pog' element={<Atendimento />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Atendimentos from './Atendimentos';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/atendimento" element={<Atendimentos/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch
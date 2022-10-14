import { Link } from 'react-router-dom';
import './App.css';
import DefaultLayout from './DefaultLayout';
import footerLogo from './mockups/SVMA.png'
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <Link to="atendimento">
      {/* <div className="App min-h-screen bg"> */}
      <Header>
        Terminal de <strong>Atendimento</strong>
      </Header>
      <Body
        subHeader={'Seja bem vindo(a)!'}
        desc={'Clique na tela para iniciar'}
      />
    </Link>
  );
}



export default App;

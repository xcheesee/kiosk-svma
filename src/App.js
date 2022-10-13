import { Link } from 'react-router-dom';
import './App.css';
import DefaultLayout from './DefaultLayout';

function App() {
  return (
    <Link to="atendimento">
      <DefaultLayout
        header={<>Terminal de <strong>Atendimento</strong></>}
      >
        <h2 className='text-[#cc3300] text-6xl font-bold my-4'>Seja bem-vindo(a)</h2>
        <p className='text-4xl my-4'>Clique na tela para iniciar</p>
      </DefaultLayout>
    </Link>
  );
}



export default App;

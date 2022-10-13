import { Link } from 'react-router-dom';
import './App.css';
import DefaultLayout from './DefaultLayout';
import footerLogo from './mockups/SVMA.png'

function App() {
  return (
    <Link to="atendimento">
      <div className="App min-h-screen bg">
        <div className="inline-flex inset-0 border-b-2 border-[#cc3300] pl-20 text-6xl text-start mt-80">
          <h1 className='my-2 max-w-[30ch]'>
            Terminal de <strong>Atendimento</strong>
          </h1>
        </div>
        <div className='px-20'>
          <h2 className='text-[#cc3300] text-6xl font-bold my-4 pt-10 pb-10'>Seja bem-vindo(a)</h2>
          <p className='text-4xl my-4'>Clique na tela para iniciar</p>
        </div>
        <img src={footerLogo} alt="" className='fixed bottom-0 right-0'/>
      </div>
      {/* <DefaultLayout
        header={<>Terminal de <strong>Atendimento</strong></>}
      >
        <h2 className='text-[#cc3300] text-6xl font-bold my-4 pt-40 pb-10'>Seja bem-vindo(a)</h2>
        <p className='text-4xl my-4'>Clique na tela para iniciar</p>
      </DefaultLayout> */}
    </Link>
  );
}



export default App;

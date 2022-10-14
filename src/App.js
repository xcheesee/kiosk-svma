import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import footerLogo from './mockups/SVMA.png'
import Header from './components/Header';
import Body from './components/Body';
import { useRef, useEffect } from 'react';
import DelayedLinkWithFadeout from './components/utils/DelayedLinkWithFadeout';

function App() {
  // const DelayedLink = ({ delay, replace, state, to, ...props }) => {
  //   const navigate = useNavigate();
  //   const timerRef = useRef();
  
  //   useEffect(() => () => clearTimeout(timerRef.current), []);
  
  //   const clickHandler = (e) => {
  //     e.preventDefault();
  //     setOpacity('opacity-0')
  //     timerRef.current = setTimeout(navigate, delay, to, { replace, state });
  //   };
  
  //   return <Link to={to} {...props} onClick={clickHandler} />;
  // };

  return (
    <DelayedLinkWithFadeout to="atendimento" delay={1000}>
      <Header>
        Terminal de <strong>Atendimento</strong>
      </Header>
      <Body
        subHeader={'Seja bem vindo(a)!'}
        desc={'Clique na tela para iniciar'}
      />
    </DelayedLinkWithFadeout>
  );
}



export default App;

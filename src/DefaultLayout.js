import { Link } from 'react-router-dom'
import footerLogo from './mockups/SVMA.png'
import './App.css';
import { useEffect, useState } from 'react';

const DefaultLayout = ({header="", children}) => {
  const [opacity, setOpacity] = useState('opacity-0')
  useEffect(() => {
    (async () => {
      await (new Promise((res, rej) => {
        setTimeout(() => res(true), 100)
      }))
      setOpacity('opacity-100')
    })();
  },[])
    return (
    <div className="App min-h-screen bg">
      <div className="inline-flex inset-0 border-b-2 border-[#cc3300] pl-20 text-6xl text-start mt-60">
        <h1 className='my-2 max-w-[30ch]'>
          {header}
        </h1>
      </div>
      <div className={`px-20 transition-opacity ${opacity} duration-1000`}>
        {children}
      </div>
      <img src={footerLogo} alt="" className='fixed bottom-0 right-0'/>
    </div>)
}

export default DefaultLayout
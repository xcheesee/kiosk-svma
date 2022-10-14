import { useContext } from 'react';
import {useState, useEffect} from 'react'
import { OpacityContext } from '../utils/opacity';

export default function Body({subHeader="", desc, children}) {
    const {getOpacity} = useContext(OpacityContext)

    useEffect(() => {
      (async () => {
        await (new Promise((res, rej) => {
          setTimeout(() => res(true), 100)
        }))
        getOpacity[1]('opacity-100')
      })();
    },[])

    return (
    <div className={`px-20 transition-opacity ${getOpacity[0]} duration-1000`}>
      <h2 className='text-[#cc3300] text-6xl font-bold my-4 pt-10 pb-10'>{subHeader}</h2>
      <p className='text-4xl my-4'>{desc}</p>
      {children}
    </div>
    )
}
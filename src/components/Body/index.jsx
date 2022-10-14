import {useState, useEffect} from 'react'

export default function Body({subHeader="", desc, children}) {
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
    <div className={`px-20 transition-opacity ${opacity} duration-1000`}>
        <h2 className='text-[#cc3300] text-6xl font-bold my-4 pt-10 pb-10'>{subHeader}</h2>
        <p className='text-4xl my-4'>{desc}</p>
        {children}
      </div>
    )
}
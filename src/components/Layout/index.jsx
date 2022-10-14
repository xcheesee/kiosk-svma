import footerLogo from '../../mockups/SVMA.png'

export default function Layout ({children}) {
    return (
        <div className="App min-h-screen bg">
            {children}
            <img src={footerLogo} alt="" className='fixed bottom-0 right-0'/>
        </div>
    )
}
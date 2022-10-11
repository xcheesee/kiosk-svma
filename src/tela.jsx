const Tela = ({header, content}) => {
    <div className="App min-h-screen bg" onClick={() => {console.log("pog")}}>
      <div className="inline-flex inset-0 border-b-2 border-[#cc3300] pl-20 text-6xl text-start mt-80">
        <h1 className='my-2'>
          {header}
        </h1>
      </div>
      <div className='px-20 my-40'>
        {/* <h2 className='text-[#cc3300] text-6xl font-bold my-4'>Seja bem-vindo(a)</h2> */}
        <p className='text-4xl my-4'>{content}</p>
      </div>
      <img src={footerLogo} alt="" className='fixed bottom-0 right-0'/>
    </div>
}
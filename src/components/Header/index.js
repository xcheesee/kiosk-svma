export default function Header({children}) {
    return (
        <div className="inline-flex inset-0 border-b-2 border-[#cc3300] pl-20 text-6xl text-start mt-60">
            <h1 className='my-2 max-w-[30ch]'>
                {children}
            </h1>
        </div>
    )
}
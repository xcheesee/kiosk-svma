export default function SolicitOptions ({options}) {
    return (
        <div className="flex flex-col gap-10 justify-between my-10">
            {options.map(option => 
                <div>
                    <button
                        className="py-1.5 text-4xl shadow-xl px-4 transition-colors bg-[#c30] border active:bg-[#a32900] border-[#a32900] text-white rounded-lg font-bold disabled:opacity-50"
                    >
                        {option}
                    </button>
                </div>)}
        </div>
    )
}
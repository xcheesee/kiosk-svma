import DelayedLinkWithFadeout from "./components/utils/DelayedLinkWithFadeout";

export default function SolicitOptions ({options, setOpacity}) {
    return (
        <div className="flex flex-col gap-10 justify-between my-10">
            {options.map(option =>
            <DelayedLinkWithFadeout
                to={'/solicitacao'}
                delay={1000}
                setOpacity={setOpacity}
            >
                <div>
                    <button
                        className="py-1.5 text-4xl shadow-xl px-4 transition-colors bg-[#c30] border active:bg-[#a32900] border-[#a32900] text-white rounded-lg font-bold disabled:opacity-50"
                    >
                        {option}
                    </button>
                </div>
            </DelayedLinkWithFadeout> 
                )}
        </div>
    )
}
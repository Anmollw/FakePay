export const Appbar = () => {
    return <div className="h-14 flex justify-between bg-black/20 backdrop-blur-sm border-b border-purple-500/20 px-6">
        <div className="flex flex-col justify-center h-full ml-4 text-2xl font-bold text-white">
            FakePay
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 text-2xl font-bold text-white">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
    </div>
}
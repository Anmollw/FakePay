export const Balance = ({value})=>{
    return <div className="flex">
        <div className="font-bold text-xl md:text-2xl text-white">
           Your balance
        </div>
        <div className="font-semibold ml-4 text-xl md:text-2xl text-white">
            Rs {value}
        </div>
    </div>
}
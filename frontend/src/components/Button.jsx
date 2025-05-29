export function Button({label, onClick}) {
    return <button onClick={onClick} type="button" class=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
}

export function ButtonGreen({label,onClick}){
    return <button onClick={onClick} type="button" class=" w-full text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
}

export function CustomButton({onClick, classname, label}){
    return (
    <button
      onClick={onClick}
      className={`rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 ${classname}`}
    >
      {label}
    </button>
  );
};
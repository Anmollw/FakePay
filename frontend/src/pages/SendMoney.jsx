import { useSearchParams } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
const backendurl = import.meta.env.VITE_API_URL
export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name")
    const [amount,setAmount] = useState(0);
    const [showPopup,setShowPopup] = useState(false);
    const [popupMessage,setPopupMessage] = useState(false);

    const handleTransfer = async () => {
        try {
            await axios.post(`${backendurl}/api/v1/account/transfer`, {
                to: id,
                amount
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setPopupMessage(`Successfully sent Rs ${amount} to ${name}`);
            setShowPopup(true);
        } catch (error) {
            console.log("Error transferring money:", error);
            setPopupMessage("Transaction failed. Please try again.");
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return ( <div class="flex justify-center min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 text-white font-sans">
        <div className="flex flex-col justify-center w-full max-w-md">
            <div
                class="p-4 bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg shadow-lg"
            >
                <div class="flex flex-col p-6 text-center">
                <h2 class="text-3xl font-bold">Send Money</h2>
                </div>
                <div class="p-6">
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-12 h-12 rounded-full bg-purple-700/50 flex items-center justify-center">
                    <span class="text-2xl">{name[0]}</span>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-300">{name}</h3>
                </div>
                <div class="space-y-4">
                    <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input onChange={(e)=>{
                        setAmount(e.target.value);
                    }}
                        type="number"
                        class="w-full h-10 px-3 py-2 bg-black/30 border border-purple-500/50 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button onClick={handleTransfer} 
                    class="w-full h-10 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-md border border-purple-500/50 transition">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
      {showPopup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="p-4 bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg shadow-lg w-80">
                        <div className="text-center">
                            <p className="text-lg text-white">{popupMessage}</p>
                            <button
                                onClick={closePopup}
                                className="mt-4 w-full h-10 px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-md border border-purple-500/50 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
    </div>
    );
};
import { useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect } from "react"
import axios from "axios"
const backendurl = import.meta.env.VITE_API_URL

export const Dashboard = () =>{
    const [balance,setBalance] = useState(0);

    useEffect(()=>{
        const getBalance = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${backendurl}/api/v1/account/balance`,{
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                });

                setBalance(response.data.balance.toString());
            } catch(error){
                console.log("Error fetching Balance:", error);
            }
        };
        getBalance();
    },[]);


    return <div className="min-h-screen bg-gradient-to-br from-purple-600 via-black to-purple-600 font-sans text-white">
        <Appbar />
        <div className="m-8 p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <Balance value = {balance} />
            <Users/>

        </div>
    </div>
}
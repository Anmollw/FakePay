import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const backendurl = import.meta.env.VITE_API_URL

export const Users = () => {
    
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(()=>{
        axios.get(`${backendurl}/api/v1/user/bulk?filter=` + filter)
             .then( response=>{
                console.log(response.data)
                setUsers(response.data.user);
             })
    },  [filter])

    

    return <>
        <div className="font-bold mt-6 md:text-2xl text-white">
            Users
        </div>
        <div className="my-4">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-4 py-2 bg-black/30 text-white placeholder-gray-400 border border-purple-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"></input>
        </div>
        <div>
            {users?.map(user => <User user={user} />)}
        </div>
    </>

}

function User({user}) {
    // Add null check for firstName
    const firstInitial = user && user.firstname ? user.firstname[0] : "";
    const navigate = useNavigate();
    return <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg mb-2 hover:bg-purple-800/30 transition-colors">
        <div className="flex items-center">
            <div className="rounded-full h-12 w-12 bg-purple-700/50 flex justify-center items-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl font-semibold text-white">
                    {firstInitial}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full text-gray-300 font-semibold">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-full">
            <Button  onClick={(e)=>{
                navigate("/send?id=" + user._id + "&name=" + user.firstname);
            }}label={"Send Money"}  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-2 px-4 rounded-lg border border-purple-500/50"/>
        </div>
    </div>
}


import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading, WhiteSubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Loader } from "../components/Loader"
const backendurl = import.meta.env.VITE_API_URL

export const Signup = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate= useNavigate();
    return <div className="bg-gradient-to-br from-black via-purple-900 to-black h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-black w-80 text-center p-2 h-max px-4 border-white border-1 text-white">
                <Heading label={"Sign up"} />
                <WhiteSubHeading label={"Enter your information to create an account"}/>
                <InputBox OnChange= {e =>{
                    setFirstName(e.target.value);
                }}placeholder= "Jacob" label={"First Name"}/>
                <InputBox OnChange={e=>{
                    setLastName(e.target.value);
                }} placeholder= "Makiera" label={"Last Name"}/>
                <InputBox OnChange={e=>{
                    setUsername(e.target.value);
                }}placeholder= "anmol@gmail.com" label={"Email"}/>
                <InputBox OnChange={e=>{
                    setPassword(e.target.value);
                }}placeholder= "1234567" label={"Password"}/>
                <div className="pt-4">
                <Button onClick={async()=>{
                    setLoading(true);
                    try{
                        const response = await axios.post(`${backendurl}/api/v1/user/signup`,{
                        username : username,
                        firstname : firstName,
                        lastname : lastName,
                        password : password
                    });
                    localStorage.setItem("token",response.data.token)
                    navigate('/dashboard')
                    }
                    catch(error){
                        console.log("Signup error : ", error)
                    }
                    finally{
                        setLoading(false);
                    }
                }} label={"Sign up"}/>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    </div>
}
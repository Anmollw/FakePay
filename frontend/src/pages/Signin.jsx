
import { useNavigate } from "react-router-dom"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading, WhiteSubHeading } from "../components/SubHeading"
import { useState } from "react"
import axios from "axios"
import { Loader } from "../components/Loader"
const backendurl = import.meta.env.VITE_API_URL


export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate= useNavigate();
    return <div className="bg-gradient-to-br from-black via-purple-900 to-black h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg  bg-black w-80 text-center p-2 h-max px-4 text-white border-white border-1">
        <Heading label={"Login"} />
        <WhiteSubHeading label={"Enter your credentials to access your account"} />
        <InputBox OnChange={(e)=>{
          setUsername(e.target.value);
        }} placeholder="anmol@gmail.com" label={"Email"} />
        <InputBox OnChange={(e)=>{
          setPassword(e.target.value);
        }} placeholder="1234567" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async()=>{
            setLoading(true)
            try{
              const response = await axios.post(`${backendurl}/api/v1/user/signin`,{
                username : username,
                password : password,
              });
              localStorage.setItem('token',response.data.token)
              navigate('/dashboard')

            }catch(error){
              console.log("Login error : " , error)
            }
            finally{
              setLoading(false)
            }
          }} label={"Login"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        {loading && <Loader />}
      </div>
    </div>
  </div>
}
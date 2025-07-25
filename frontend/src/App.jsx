import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import { LandingPage } from "./pages/LandingPage"
import { Analytics } from "@vercel/analytics/react"


function App() {

  return (
    <>
      <BrowserRouter>
      <Analytics />
        <Routes>
          <Route path="/" element = {<LandingPage />} />
          <Route path="/signup" element={ <Signup />} />
          <Route path="/signin" element={ <Signin />} />
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="/send" element={ <SendMoney />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

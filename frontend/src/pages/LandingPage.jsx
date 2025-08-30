import React from 'react';
import { CustomButton } from '../components/Button';

export const LandingPage = ()=>{
    return <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 font-sans">
        <nav className=" flex justify-between items-center px-6 py-4 bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
           <div className="text-2xl font-bold text-white">
               FakePay
            </div>

            <div className='flex space-x-6'>
                <button onClick={async()=>{
                    window.location.href = "https://github.com/Anmollw/FakePay";
                }}className='text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-purple-800/30 font-semibold'>
                    About
                </button>
                <button onClick= {async()=>{
                    window.location.href = 'https://x.com/anmollwadhwa';
                }}className='text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-purple-800/30 font-semibold'>
                    Contact
                </button>
                <button onClick = {async()=>{
                    window.location.href = '/signin';
                }}className='text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-purple-800/30 font-semibold'>
                    Login
                </button>
            </div>
        </nav>

        <div className='flex flex-col justify-center items-center px-7 py-35'>
            <div className='max-w-4xl w-full text-center'>
                <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight'>
                    Send.Receive.
                    <span className='block text-purple-400'>Simple.</span>
                </h1>

                <p className='text-gray-300 mb-12 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed'>
                    Banking made simple. Transfer money instantly,
                    track every transaction, and stay in control of your finances.
                </p>
            </div>

            <div className='space-y-4 w-full max-w-sm'>
                <CustomButton onClick={async()=>{
                    window.location.href = '/signup';
                }}
                classname="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-8 rounded-xl border-2 border-purple-500/50 shadow-lg shadow-purple-500/25"
                label={"Get Started"}
                />
            </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-8 text-gray-400 text-sm">
              <span>Secure</span>
              <span>•</span>
              <span>Fast</span>
              <span>•</span>
              <span>Reliable</span>
            </div>
      </div>
        
    </div>
}

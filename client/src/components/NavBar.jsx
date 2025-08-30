import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-between items-center py-0 mx-8 sm:mx-20 xl:mx-32">
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        src="/logo.png"
        alt="logo"
        className="w-40 sm:w-52 cursor-pointer"
      />

      {/* Button */}
      <button
        onClick={() => navigate('/admin')}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
      >
        Login
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>
    </div>
  )
}

export default NavBar

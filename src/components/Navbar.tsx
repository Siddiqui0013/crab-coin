import { useState } from "react"
import logo from "../assets/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const handleScroll = ( id : string ) =>{
    const elem = document.getElementById(id)
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    } 
  }

  const menuItems =[
    { name: 'Home', id : 'home' },
    { name: 'About', id : 'about' },
    { name: 'Tokenomics', id : 'tokenomics' },
    { name: 'Roadmap', id : 'roadmap' },
    { name: 'FAQ', id : 'faq' },
  ]
  

  return (
    <div className="flex justify-between items-center p-4 md:p-8">
      <img src={logo} alt="logo" className="w-12 h-12 md:w-20 md:h-20 " />
      
      <div className="nav md:flex hidden items-center space-x-4 md:space-x-8">
        {menuItems.map((item)=> (
          <p className="text-2xl cursor-pointer" onClick={()=> handleScroll(item.id) }>{item.name}</p>
        ))}
      </div>

      <div className="md:hidden flex items-center">
          <button
          onClick={()=>{setOpen(!open)}}
          className="focus:outline-none  z-50"
          >
            {open ? <RxCross1 className="text-3xl" /> : <RxHamburgerMenu className="text-3xl" />}
          </button>
        
      <div 
          className={`md:hidden gap-8 fixed inset-0 bg-[#F4D06F] z-10 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
            open ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
        >
          {menuItems.map((item)=> (
            <p className="text-2xl" onClick={()=> handleScroll(item.id) }>{item.name}</p>
          ))}
      </div>

      </div>

      <div className="bg-[#FF6F61] border-black border-b-4 border-r-4 rounded-lg hidden md:block md:text-lg text-white px-8 py-2 shadow-md">Buy $CRAB</div>

    </div>
  )
}

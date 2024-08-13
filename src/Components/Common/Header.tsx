import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { DiCodeigniter } from "react-icons/di"
import { Link } from "react-router-dom"


const Header:React.FC = () => {
  const [Dropdown, setDropdown] = useState(false)
  const DropMenu = () =>{
    setDropdown(!Dropdown)
  }
  return (
    <header className="flex w-full h-[10vh] bg-[#0f0715] items-center justify-center border-none top-0 sticky z-20 flex-col shadow-lg">
      <div className="flex w-[90%] h-[8vh] bg-[] items-center justify-between">
        <Link to="/" className="text-[#dddddd] flex justify-center items-center gap-2">
         <DiCodeigniter size={35} /> <text className="text-sm sm:text max-sm:hidden">Divine Uwandu</text>

        </Link>



          <div className="flex w-[50%] justify-between items-center max-sm:w-[133px]">
            <nav className="flex text-[#dddddd] text-sm justify-between items-center w-[70%] max-sm:hidden">
                     <Link to="/">Home</Link>
                     <Link to="/about">About</Link>
                     <Link to="/services">Services</Link>
                     <Link to="/portfolios">Portfolio</Link>
                     <Link to="/">Blog</Link>

            </nav>
             <div>
               <Link to="/contact">
              <button
                className=" py-[11px] px-[28px]   relative flex justify-center  
              max-sm:hidden max-lg:hidden max-xl:flex shadow-md items-center gap-1 hover:before:translate-x-[105%]
        overflow-hidden before:transition-transform
        before:duration-[1s] ease-in-out text-[#dddddd] before:bg-[#5c34ad] before:absolute
        before:top-0 before:left-0 before:w-full before:h-full
        transition-colors duration-[1s] before:z-[-1] z-[1]
        hover:text-black rounded-[4px]
        bg-[#fff]
        h-11 text-[13px] font-medium border-none max"
        
        >
               Contact Me!
              
            
              </button>
               </Link>
             </div>
            
        </div>
    <div onClick={DropMenu} className="cursor-pointer flex  rounded-3xl md:hidden text-[#fff] ease-in-out duration-700 w-[40px] h-[40px] bg-[#0f0715] justify-center items-center">
       {!Dropdown ?   <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}</div>
      </div>
      {/* drop */}
        <div 
        className={!Dropdown?"w-full h-[35vh] bg-[#0f0715] fixed top-[10%] justify-center items-center flex left-[-100%] ease-in-out duration-700" : "w-full h-[35vh] bg-[#0f0715] fixed top-[10%] justify-center items-center flex left-0 ease-in-out duration-700"}
        >
          <div className="w-[90%] h-[33vh] flex flex-col justify-between">
            <Link to="" className="flex text-[#fff] text-sm justify-between items-center w-[70%]">Home</Link>
            <Link to="/about" className="flex text-[#fff] text-sm justify-between items-center w-[70%]">About</Link>
            <Link to="/services" className="flex text-[#fff] text-sm justify-between items-center w-[70%]">Services</Link>
            <Link to="/portfolios" className="flex text-[#fff] text-sm justify-between items-center w-[70%]">Portfolio</Link>
            <Link to="/" className="flex text-[#fff] text-sm justify-between items-center w-[70%]">Blog</Link>
            <Link to="/contact">
              <button
                className=" py-[11px] px-[28px]   relative flex justify-center  
              max-sm:flex max-lg:hidden max-xl:flex shadow-md items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
        overflow-hidden before:transition-transform
        before:duration-[1s] ease-in-out text-white before:bg-[#5c34ad] before:absolute
        before:top-0 before:left-0 before:w-full before:h-full
        transition-colors duration-[1s] before:z-[-1] z-[1]
        hover:text-black rounded-[4px]
        bg-[#fff]
        h-11 text-[13px] font-medium border-none max"
        
        >
               Contact Me
              </button>
               </Link>
          </div>
        </div>
    </header>
  )
}

export default Header

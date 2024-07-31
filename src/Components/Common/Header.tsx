import { DiCodeigniter } from "react-icons/di"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className="flex w-[100%] h-[11vh] bg-[#0f0715] items-center justify-center border-none top-0 sticky z-20">
      <div className="flex w-[90%] h-[8vh] bg-[] items-center justify-between">
        <Link to="/" className="text-[#fff] flex justify-center items-center gap-2">
         <DiCodeigniter size={20} /> <text className="text-sm sm:text max-sm:hidden">Divine Uwandu</text>

        </Link>

        {/* Nav Link */}
       
          <div className="flex w-[50%] justify-between items-center max-sm:w-[133px] bg-[]">
            <nav className="flex text-[#fff] text-sm justify-between items-center w-[70%] max-sm:hidden ">
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
              max-sm:flex max-lg:hidden max-xl:hidden shadow-md items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
        overflow-hidden before:transition-transform
        before:duration-[1s] ease-in-out text-white before:bg-[#5c34ad] before:absolute
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

      </div>
    </header>
  )
}

export default Header

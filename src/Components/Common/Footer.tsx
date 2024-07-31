import { DiCodeigniter } from "react-icons/di"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="w-[100%] h-[40vh] bg-[#0f0715] flex justify-center items-center">
      <div className="flex w-[90%] min-h-[25vh] bg-[#] justify-center items-center">
        <section className="flex flex-col justify-between items-center bg-[] w-[78%] gap-4 max-sm:w-full">
          <div className="flex justify-center items-center flex-col gap-3 text-[#fff]">
            <DiCodeigniter size={100} color="#fff"/> <text className="text-sm sm:text">Divine Uwandu</text>
          </div>
          <nav className="flex justify-between items-center w-[45%] text-[#fff] max-sm:w-full" >
           
                     <Link to="/about">About</Link>
                     <Link to="/services">Services</Link>
                     <Link to="/portfolios">Portfolio</Link>
                     <Link to="/">Blog</Link>
                     <Link to="/contact">Contact</Link>
          </nav>

        </section>

      </div>
      
    </footer>
  
  )
}

export default Footer

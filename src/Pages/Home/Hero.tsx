
import { ImGithub } from "react-icons/im"
import Typewriter from 'typewriter-effect';
import { SiLinkedin } from "react-icons/si"
import { Link } from "react-router-dom";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const Hero = () => {
  return (
 <main className="flex bg-[#0F0715] h-[90vh] w-full justify-center items-center">
  <div className="w-[90%] h-[80vh] flex justify-between items-center flex-col">
  <div className="w-full flex-col flex max-sm:gap-8 max-2xl:gap-7 max-lg:w-full max-md:w-full max-md:h- items-center justify-center h-[70vh]">
<div className="max-md:h-[23vh] w-full max-md:w-full flex forced-color-adjust-auto items-center justify-center">
       <span className="font-bold max-md:text-6xl sm:text-6xl lg:text-7xl text-[#dddddd]">
       Hello I'm Divine
      </span>
</div>
   <div className="w-full max-md:h-[23vh] flex forced-color-adjust-auto items-center justify-center">
        <b className="font-bold text-2xl max-md:text-4xl lg:text-7xl text-[#8f5bf8]">
          <Typewriter
  options={{
    strings: ['Web Developer + UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
   
      </b>
  </div>
      <span className="font-bold text-base sm:text-lg lg:text-xl text-[#f5f0fe] w-[70%] flex items-center justify-center text-center max-md:w-full " data-aos="fade-up">
        I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
      </span>
      <div className="flex gap-3">
        <button
          className="py-2.5 px-7 relative flex justify-center shadow-md items-center gap-1  hover:before:translate-x-full overflow-hidden before:transition-transform before:duration-1000 ease-in-out text-[#5c34ad] before:bg-[#0F0715] before:absolute before:top-0 before:left-0 before:w-full before:h-full transition-colors duration-1000 before:z-[-1] z-10 hover:text-white rounded-md bg-[#5c34ad] border border-[#5c34ad] h-11 text-sm font-medium"
        >
         <a href="file:///C:/Users/Divine/Pictures/Saved%20Pictures/Divine%20Uwandu.pdf"> Download CV</a>
        </button>  
         <Link to="https://github.com/DevDivine-001" className="h-10 w-10 relative flex justify-center shadow-md items-center gap-1  hover:before:translate-x-full overflow-hidden before:transition-transform before:duration-1000 ease-in-out text-[#5c34ad] before:bg-[#0F0715] before:absolute before:top-0 before:left-0 before:w-full before:h-full transition-colors duration-1000 before:z-[-1] z-10 hover:text-white rounded-full bg-[#5c34ad] border border-[#5c34ad] text-sm font-medium animate-bounce">
          <ImGithub />
        </Link>
         <Link to="https://www.linkedin.com/in/divineuwandu/" className="h-10 w-10 relative flex justify-center shadow-md items-center gap-1  hover:before:translate-x-full overflow-hidden before:transition-transform before:duration-1000 ease-in-out text-[#5c34ad] before:bg-[#0F0715] before:absolute before:top-0 before:left-0 before:w-full before:h-full transition-colors duration-1000 before:z-[-1] z-10 hover:text-white rounded-full bg-[#5c34ad] border border-[#5c34ad] text-sm font-medium animate-bounce">
          <SiLinkedin />
        </Link>
      </div>

  </div>
  <div className="items-center justify-center w-full flex h-[15vh] text-[#5c34ad]">
    <IoChevronDownCircleOutline size={30} className="animate-bounce" />
  </div>
    
  </div>
</main> 

  )
}

export default Hero


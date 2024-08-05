
import { ImGithub } from "react-icons/im"
import Typewriter from 'typewriter-effect';
import { SiLinkedin } from "react-icons/si"
import { Link } from "react-router-dom";


const Hero = () => {

  const data = {
    aosDelay: 200, // example value
  };
  return (

 <main className="flex bg-[#0F0715] h-[93vh] w-full justify-center items-center">
  <div className="flex justify-between w-[90%] h-[80vh] border-none  bg-[]  flex-wrap gap-5 items-center" >
   <div className="w-[45%] h-[] bg-[#] max-sm:w-[80%] flex-col flex max-sm:gap-3 max-2xl:gap-7 max-xl:w-full">
    <span className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#f5f0fe]">
       Hello I'm Divine
      </span>
        <b className="font-bold text-2xl sm:text-3xl lg:text-5xl text-[#8f5bf8]">
          <Typewriter
  options={{
    strings: ['Web Developer + UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      {/* Web Developer <span className="text-[#f5f0fe]">+</span> UX Designer */}

      </b>
      <span className="font-bold text-base sm:text-lg lg:text-xl text-[#f5f0fe]">
        I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
      </span>
      <div className="flex gap-3">
        <button
          className="py-2.5 px-7 relative flex justify-center shadow-md items-center gap-1  hover:before:translate-x-full overflow-hidden before:transition-transform before:duration-1000 ease-in-out text-[#5c34ad] before:bg-[#0F0715] before:absolute before:top-0 before:left-0 before:w-full before:h-full transition-colors duration-1000 before:z-[-1] z-10 hover:text-white rounded-md bg-[#5c34ad] border border-[#5c34ad] h-11 text-sm font-medium"
        >
          Download CV
        </button>  
         <Link to="https://github.com/DevDivine-001" className="h-10 w-10 relative flex justify-center shadow-md items-center gap-1  hover:before:translate-x-full overflow-hidden before:transition-transform before:duration-1000 ease-in-out text-[#5c34ad] before:bg-[#0F0715] before:absolute before:top-0 before:left-0 before:w-full before:h-full transition-colors duration-1000 before:z-[-1] z-10 hover:text-white rounded-full bg-[#5c34ad] border border-[#5c34ad] text-sm font-medium animate-bounce">
          <ImGithub />
        </Link>
         <Link to="https://www.linkedin.com/in/divineuwandu/" className="h-10 w-10 relative flex justify-center shadow-md items-center gap-1  hover:before:translate-x-full overflow-hidden before:transition-transform before:duration-1000 ease-in-out text-[#5c34ad] before:bg-[#0F0715] before:absolute before:top-0 before:left-0 before:w-full before:h-full transition-colors duration-1000 before:z-[-1] z-10 hover:text-white rounded-full bg-[#5c34ad] border border-[#5c34ad] text-sm font-medium animate-bounce">
          <SiLinkedin />
        </Link>
      </div>

  </div>
  
  <div className="w-[40%]  max-sm:w-full justify-center items-center flex max-sm:h-[330px] max-xl:w-full rounded-xl"
   data-aos="zoom-in"
                data-aos-delay={data.aosDelay}
  
  >
    <img src="https://i.im.ge/2024/08/05/fXwVk9.WhatsApp-Image-2024-07-29-at-11-07-14-removebg-1.png" alt="" className="
    w-full max-sm:h-[330px] max-sm:w-full rounded-xl max-xl:h-[400px] max-2xl:h-[460px] object-cover"/>

  </div> 


  </div>
</main> 

  )
}

export default Hero


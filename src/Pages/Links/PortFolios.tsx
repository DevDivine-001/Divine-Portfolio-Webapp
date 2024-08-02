
import git from "../../assets/logomark-orange@2x.png"
import vercel from "../../assets/logo-vercel-svgrepo-com.svg" 
import netlify from "../../assets/netlify.svg" 
import Github from "../../assets/GitHub-Logo.wine.svg" 
import vite from "../../assets/Vite.js.svg" 
import next from "../../assets/Next.js.png" 
import Typewriter from 'typewriter-effect';
import MongoDB from "../../assets/mongodb-icon-2.svg"
import PostgreSQL from "../../assets/PostgreSQL-Logo.wine.svg"
import Postman from "../../assets/postman-icon-svgrepo-com.svg"
import { RiArrowDropDownLine } from "react-icons/ri"
const PortFolios = () => {
  const works = [
    {
      id:1,
      text:"FirstCapital",
      subtitle:"FirstCapital",
      LiveUrl:"https://firstcapital.vercel.app/",
      img:"https://i.im.ge/2024/07/30/VnfGVT.Screenshot-2024-07-29-183553.png"
    


    },
    {
      id:2,
      text:"Real Estate",
      subtitle:"Full-Stack-Real Estate web-app",
      LiveUrl:"https://github.com/DevDivine-001/FULL-STACK-MERN-Divine-REAL-Estate.git",
      img:"https://i.im.ge/2024/07/30/VnkrCJ.Screenshot-2024-07-29-191013.png",
    },
    {
      id:3,
      text:"BootCampFE Real Estate",
      subtitle:"Estate web-app FE",
      LiveUrl:"https://github.com/DevDivine-001/BootCampFE.git",
      img:"https://i.im.ge/2024/07/31/VBWRUx.coding-bootcamp-768x364.png",
    },
  ]
  return (
    <>
        <div className="w-[100%] h-[110vh] bg-[#0f0715] flex justify-center items-center">
   
    <div className="w-[90%] h-[100vh] bg-[] flex flex-col gap-8 items-center justify-between">  
      <div className="flex justify-center items-center bg-[]">
        <span className="sm:text-sm md:text-md lg:text-lg xl:text-5xl text-[#fff]"> <Typewriter
  options={{
    strings: ['These are my stack'],
    autoStart: true,
    loop: true,
  }}
/></span>
      </div>
     <div className="flex bg-[#] justify-between max-sm:flex-col  flex-wrap w-full gap-3">
       
        <div className="w-[27%] bg-[#] h-[] max-sm:w-full gap-4 flex flex-col">
          <b className="text-center flex text-[#8f5bf8]">Programming Languages</b>
         <div className="flex bg-[] w-[88%] flex-wrap justify-between gap-4">
          <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
             <img src="https://miro.medium.com/v2/resize:fit:1000/1*C24eNZfu0CT5fSTBt6IugA.png" alt="" className="w-[35px] h-[35px] flex object-cover"/>
            <p className="text-[#fff]">Typescript</p>
          </div>
            <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
           <img src="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png" alt="" className="w-[35px] object-cover h-[35px]"/>
             
            <p className="text-[#fff]">Javascript</p>
          </div>
         </div>
      

          
        </div>
        <div className="w-[27%] bg-[#] h-[] max-sm:w-full gap-8 flex flex-col">
          <b className="text-center flex text-[#8f5bf8]">Frameworks</b>
         <div className="flex bg-[] w-[88%] flex-wrap justify-between gap-4">
          <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
             <img src={next} alt="" className="w-[35px] h-[35px] flex object-cover"/>
            <p className="text-[#fff]">Next13.js</p>
          </div>
         
         
          <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3">
             <img src="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png" alt="" className="w-[35px] h-[35px] flex object-cover"/>
            <p className="text-[#fff]">React</p>
          </div>
          <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbP4rcqpqxOe_azxlyuxLDsqPvIoxEqMwXEJ6Qqb-wdsWP4PFF9sOGYa2IoLHLI9JhNc&usqp=CAU" alt="" className="w-[35px] h-[35px] flex object-cover"/>
            <p className="text-[#fff]">Tailwind Css</p>
          </div>
            <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
           <img src={vite} className="w-[35px] h-[35px] flex object-cover"/>
             
            <p className="text-[#fff]">Vite</p>
          </div>

            <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
           <img src={MongoDB}  className="w-[30px] h-[30px] flex object-cover"/>
             
            <p className="text-[#fff]">MongoDB</p>
          </div>
            <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
           <img src={PostgreSQL}  className="w-[35px] h-[35px] flex object-cover"/>
             
            <p className="text-[#fff]">PostgreSQL</p>
          </div>
         </div>
        </div>
        <div className="w-[27%] bg-[] h-[] max-sm:w-full gap-8 flex flex-col">
          <b className="text-center flex text-[#8f5bf8]">Tools & Platforms</b>
         <div className="flex bg-[] w-[88%] flex-wrap justify-between gap-4">
          <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBwq1RrWCvEBjqWcXcvMGzk_4WBRFx2JRyg&s" alt="" className="w-[35px] h-[35px] flex object-cover"/>
            <p className="text-[#fff]">Firebase</p>
          </div>
            <div className="flex bg-[#140c1c] p-  items-center justify-center gap-3 rounded-md">
           <img src="https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png" alt="" className="w-[35px] object-cover h-[35px]"/>
             
            <p>Figma</p>
          </div>
            <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3  rounded-md">
           <img src={vercel} alt="" className="w-[35px] object-cover h-[35px]"/>
             
            <p className="text-[#fff]">Vercel</p>
          </div>
            <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
           <img src={netlify} alt="" className="w-[35px] object-cover h-[35px]"/>
             
            <p className="text-[#fff]">netlify</p>
          </div>
            <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
           <img src={git} alt="" className="w-[35px] object-cover h-[35px]"/>
             
            <p className="text-[#fff]">Git</p>
          </div>
            <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
           <img src={Github} alt="" className="w-[35px] object-cover h-[35px]"/>
             
            <p className="text-[#fff]">Github</p>
          </div>
            <div className="flex bg-[#140c1c] p-1  items-center justify-center gap-3 rounded-md">
           <img src={Postman} alt="" className="w-[35px] object-cover h-[35px]"/>
             
            <p className="text-[#fff]">Postman</p>
          </div>
         </div>
        </div>
       
      
      
      </div>
      <div className="flex">
          <button className="animate-bounce w-[50px] h-[50px] text-[#fff] rounded-[50px] flex justify-center items-center border-[1px] border-[#8f5bf8]"><RiArrowDropDownLine size={35} className="border-none"/></button>
     </div> 
    </div>

    </div>
    <div className="h-[100vh] bg-[#0f0715] w-full justify-center items-center flex">
      <div className="h-[90vh] w-[90%] justify- items-center flex flex-col gap-6 bg-[]">
        <span className="sm:text-sm md:text-md lg:text-lg xl:text-5xl text-[#8f5bf8]">
              My Recent Works
        </span>
    
        <div>
        </div>

<div className="w-full flex flex-wrap gap-4">
  
  
  {
    works.map((data, index) =>(
      <div className="flex flex-col bg-[#140c1c] w-[20%] gap-1 rounded-xl p-2 max-sm:w-full" key={index}>
  <img src={data.img} alt="" className="h-[110px] w-full bg-] rounded-md object-fill" />
  <small className="text-[#8f5bf8]">{data.text}</small>
  <p className="text-[#8f5bf8]">{data.subtitle}</p>
  <a href={data.LiveUrl} className="text-[#8f5bf8]">
    Live PerView
  </a>
 
</div>
    ))
  }
</div>
      </div>
      
    </div>
     </>
  )
}

export default PortFolios
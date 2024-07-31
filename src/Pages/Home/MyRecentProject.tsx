import { Link } from "react-router-dom"
import school from ".././../assets/Screenshot 2024-07-30 120106.png"



const project  = [
  {
    id:1,
    img:"https://i.im.ge/2024/07/30/V491GJ.Screenshot-2024-07-30-120943.png",
    live:"https://ecom-website-dev.web.app/",
    preview:"Live Preview"
  },
  {
    id:2,
    img:"https://i.im.ge/2024/07/30/VnkrCJ.Screenshot-2024-07-29-191013.png",
    preview:"Live Preview",
    live:"https://github.com/DevDivine-001/FULL-STACK-MERN-Divine-REAL-Estate.git"
  },
  {
    id:3,
    img:"https://i.im.ge/2024/07/30/V49qpz.Screenshot-2024-07-30-123713.png",
    live:"https://meet-and-greet-c01de.web.app/",
    // Live:"https://meet-and-greet-c01de.web.app/",
     preview:"Live Preview"
  },
  {
    id:4,
    img:school,
     preview:"Live Preview",
     live:"https://dirt2school-web-app.web.app/"
  },
]




const MyRecentProject = () => {
  return (


<section className="flex bg-[#0F0715] h-[160vh] w-full justify-center items-center max-xl:h-[120vh] max-2xl:h-[180vh] max-lg:h-[170vh] max-sm:h-[170vh]">
  <div className="flex justify-between w-[90%] h-[140vh] border-none flex-wrap gap-5 items-center flex-col max-xl:h-[110vh] max-2xl:h-[130vh] max-lg:h-[145vh]" > 
     <div className="w-[46%] flex justify-center items-center flex-col text-center max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full bg-[]">
         <b className="sm:text-[30px] md:text-md lg:text-lg xl:text-5xl text-[#8f5bf8]"data-aos="fade-up">My Recent Works</b>
         <span className="sm:text-sm md:text-md lg:text-lg xl:text-sm text-[#f5f0fe]" data-aos="fade-left">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</span>
       </div>
       <div className="w-full flex-wrap flex justify-between gap-5 items-center overflow-hidden">
   
    
   
    
    
    {
      project.map((item, index) =>(
        <div className="w-[40%] bg-[#140c1c] h-auto flex  items-center py-4  justify-center rounded-lg max-sm:w-full max-lg:w-full flex-col cursor-pointer" key={index} data-aos="zoom-in-right">
  
    <Link to="/portfolios" className="w-full flex justify-center items-center object-cover">
    <img  alt="" className="w-[89%] h-[300px] bg-[red] rounded-lg max-sm:h-[160px] max-lg:h-[235px] object-cover flex justify-center items-center" src={item.img}/>
    </Link>
   <a  href={item.live}  className="border-none outline-none rounded-none bg-transparent text-[#8f5bf8]">
   {/* <button className="border-none outline-none rounded-none bg-transparent text-[#8f5bf8]"> */}
    {item.preview}
   {/* </button> */}
   </a>
   </div>
      ))
    }
    
        
   
       </div>
  

  </div>
</section> 

  )
}

export default MyRecentProject



// export default function MyRecentProject() {
//   const list = [
//     {
//       di:1,
//       name: "divne",
//       url: "https://valerian-pedro.vercel.app/"
//     },
//     {
//       name: "divne",
//       url: "https://valerian-pedro.vercel.app/"
//     },
//   ];

//   return (
//     <div>
//       <ul>
//         {list.map((item, index) => (
//           <li key={index}>
//             <a href={item.url} target="_blank" rel="noopener noreferrer">
//               {item.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
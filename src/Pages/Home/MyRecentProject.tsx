import { Link } from "react-router-dom"
import school from ".././../assets/Screenshot 2024-07-30 120106.png"
import pic from "../../assets/Screenshot 2024-07-30 120943.png"



const project  = [
  {
    id:1,
    img:"https://i.im.ge/2024/07/30/V491GJ.Screenshot-2024-07-30-120943.png",
    live:"https://ecom-website-dev.web.app/",
    preview:"Live Preview",
    works:"E-commerce ",
  },
  {
    id:2,
    img:"https://i.im.ge/2024/07/30/VnkrCJ.Screenshot-2024-07-29-191013.png",
    preview:"Codebase Preview",
    live:"https://github.com/DevDivine-001/FULL-STACK-MERN-Divine-REAL-Estate.git",
    works:"Real-Estate",
  },
  {
    id:3,
    img:"https://i.im.ge/2024/07/30/V49qpz.Screenshot-2024-07-30-123713.png",
    live:"https://meet-and-greet-c01de.web.app/",
    // Live:"https://meet-and-greet-c01de.web.app/",
     preview:"Live Preview",
     works:"Aledoy-Meet & Greet"

  },
  {
    id:4,
    img:school,
     preview:"Live Preview",
     works:"Dirt2school.2",
     live:"https://dirt2school-web-app.web.app/"
  },
  {
    id:5,
    img:"https://i.im.ge/2024/08/10/f2spI6.Screenshot-2024-08-09-233247.png",
     preview:"Live Preview",
     works:"data-analytics",
     live:"https://data-analytics-webapp.web.app/"
  },
  {
    id:6,
    img:school,
     preview:"Live Preview",
     works:"Dirt2school.2",
     live:"https://dirt2school-web-app.web.app/"
  },
  // {
  //   id:7,
  //   img:school,
  //    preview:"Live Preview",
  //    works:"Dirt2school.2",
  //    live:"https://dirt2school-web-app.web.app/"
  // },
  // {
  //   id:8,
  //   img:school,
  //    preview:"Live Preview",
  //    works:"Dirt2school.2",
  //    live:"https://dirt2school-web-app.web.app/"
  // },
]




const MyRecentProject = () => {
  return (
    <section className="w-full h-[160vh] bg-[#0f0715] flex items-center justify-center max-md:h-[200vh]">
      <div className="w-[90%] h-[145vh] justify-between items-center  max-md:h-[185vh] flex-col flex">
      <div className="max-md:w-full flex justify-center items-center">
 <strong className="text-[#8f5bf8] sm:text-[30px] md:text-md lg:text-lg xl:text-5xl font-bold ease-in-out duration-700" data-aos="fade-in">My Recent Projects</strong>
        </div>
        <div className="w-full max-md:h-[178vh] flex items-c justify-between flex-wrap max-2xl:gap-[60px] max-md:gap-6 ">
        {
          project.map((data, index) => (
<div className="w-[30%] max-md:w-full" data-aos="zoom-in">
                <div className="items-center justify-center flex flex-col bg-[#140c1c] max-md:w-full p-4 max-md:p-3 rounded-lg gap-2 hover:scale-110 ease-in-out duration-700 cursor-pointer" key={index}>
             <img src={data.img} alt="" className="w-[100%] h-[300px] max-md:h-[130px] rounded-xl"/>
         <div className="w-full justify-between items-center flex">  

             <span className="md:text-sm cursor-pointer text-[#8f5bf8] hover:text-[#fff] ease-in-out duration-700">{data.works}</span>
        <a href={data.live}
         className="md:text-sm cursor-pointer text-[#8f5bf8] hover:text-[#fff] ease-in-out duration-700"
         >
             {data.preview}
         </a>
         </div>
          </div>
</div>

          ))
        }
        </div>
      </div>
</section>

  )
}

export default MyRecentProject
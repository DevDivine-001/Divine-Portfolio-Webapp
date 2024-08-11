import { Link } from "react-router-dom"
import school from ".././../assets/Screenshot 2024-07-30 120106.png"



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
     works:"Dirt2school.2",
     live:"https://data-analytics-webapp.web.app/"
  },
  {
    id:6,
    img:school,
     preview:"Live Preview",
     works:"Dirt2school.2",
     live:"https://dirt2school-web-app.web.app/"
  },
  {
    id:7,
    img:school,
     preview:"Live Preview",
     works:"Dirt2school.2",
     live:"https://dirt2school-web-app.web.app/"
  },
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


    <section className="w-full h-[180vh] bg-[#150b20] flex items-center justify-center">
      <div className="w-[90%] h-[135vh] flex justify-between items-center  flex-col max-md:h-[168vh]">
        <div className="max-md:w-full flex justify-center items-center">
 <strong className="text-[#8f5bf8] sm:text-[30px] md:text-md lg:text-lg xl:text-5xl font-bold ease-in-out duration-700" data-aos="fade-in">My Recent Projects</strong>
        </div>
        <div className="w-full flex flex-wrap items- justify-  gap-[30px]">
          {
            project.map((item, index) => (
               <div className="w-[23.1%] flex flex-col max-md:p-3 max-2xl:p-5 rounded-lg  bg-[#140c1c] max-md:w-full max-2xl:gap-3 max-md:gap-0" key={index} data-aos="zoom-in">
            <img src={item.img} className="w-[100%] h-[40vh] rounded-lg max-md:h-[10vh] hover:scale-105  duration-300 cursor-pointer object-contain items-center justify-center flex bg-[red]" alt="" />
            <div className="flex justify-between items-center ">
            <span className="md:text-sm cursor-pointer text-[#8f5bf8] hover:text-[#fff] ease-in-out duration-700">{item.works}</span>
         <a href={item.live}
         className="md:text-sm cursor-pointer text-[#8f5bf8] hover:text-[#fff] ease-in-out duration-700"
         >
             {item.preview}
         </a>

            </div>
          </div>
            ))
          }
                </div>
                <div className="flex justify-center items-center"><Link to="/"><button className="text-md md:text-md text-[#8f5bf8] hover:text-[#f5f0fe] ease-in-out duration-700">See More</button></Link></div>

  </div>
</section>

  )
}

export default MyRecentProject
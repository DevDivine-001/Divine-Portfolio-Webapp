import { FaRegLightbulb } from "react-icons/fa"


const MyQualityServices = () => {
  const QualityData = [
    {
      id:1,
      title:"01 Web Developer",
      subtitle:"I build functional websites, user-friendly websites, and web applications. I can write code, develop and test new applications, and monitor site performance and traffic.",
      icons:<FaRegLightbulb />
    },
    {
      id:2,
      title:"02 Frontend Developer",
      subtitle:"I ensure that website visitors can easily interact with the page. I can do this through the combination of design with functional.",
      icons:<FaRegLightbulb />
    },
    {
      id:3,
      title:"03 Backend Developer",
      subtitle:"I refer to APIs that respond to end-to-end user activities or requests, for example, Updating, adding User routers, network servers, and email servers with authentication systems.",
      icons:<FaRegLightbulb />
    },
    {
      id:4,
      title:"04 UI/UX",
      subtitle:"I focus on creating user interfaces and user experiences for various product designs.",
      // subtitle:"I specialized in software development focusing on creating user interfaces and user experiences for visitor's products design",
      icons:<FaRegLightbulb />
    },

  ]
  return (
    <section className="w-full h-[125vh] bg-[#000] flex items-center justify-center">
      <div className="w-[90%] h-[100vh] flex justify-between items-center flex-col">
        <div className="max-md:w-full flex justify-center items-center">
 <strong className="text-[#8f5bf8] sm:text-[30px] md:text-md lg:text-lg xl:text-5xl font-bold ease-in-out duration-700" data-aos="fade-in">My Quality Services</strong>
        </div>
        <div className="w-full flex flex-col justify-between max-2xl:h-[80vh]">
          {
            QualityData.map((data) => (
              <div className="w-full  max-md:w-full border-b-[1px] border-[#8f5bf8] flex flex-wrap justify-between items-center p-[45px] max-md:p-[5px] max-md:h-[23vh] bg-[#673bbf]-500 ease-in-out duration-700 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer" key={data.id} data-aos="zoom-in-down ">
            <b className="text-md lg:text-2xl font-extrabold w-[28%] max-md:w-full text-[#fff]">{data.title}</b>
            <small className="w-[40%] max-md:w-full text-md lg:text-1xl font-medium text-[#f5f0fe]">{data.subtitle}</small>
            <div className="text-md lg:text-3xl font-medium text-[#8f5bf8]">{data.icons}</div>

          </div>
        
            ))
          }
        </div>
  </div>
</section>
  )
}

export default MyQualityServices

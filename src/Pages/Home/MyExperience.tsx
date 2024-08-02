

const MyExperience = () => {
  const Experience = [
    {
      id:1,
      role:"Role: Frontend Lead",
      path:"Projects: Dirt2school ,work on Register & SignIn with APIs",
      year:"Year: 2023",

    },
    {
      id:2,
      year:"Year: 2023/2024",
      role:"Role: Backend Developer",
      path:"Projects: Work on Authentication systems, CURD"

    },
    {
      id:3,
      year:"Year: 2023",
      role:"UI/UX",
      path:""

    },
  ] 
  const education = [
    {
      id:1,
      year:"Year: 2023/2024",
      role:"Free CodeCamp",
      path:"Role: FrontEnd Developer"

    },
    {
      id:2,
      year:"Year: 2023",
      role:"School: CodeLab",
      path:"Role: Backend Developer & FrontEnd Developer & UI/UX"

    },
    { 
      id:3,
      year:"Year: 2024",
      role:"Free CodeCamp",
      path:"Backend Developer"

    },
  ] 
  return (
    <section className="w-[100%] h-[123vh] bg-[#050709] justify-center items-center flex">
      <div className="w-[90%] min-h-[100vh] flex justify-between  bg-[] max-sm:flex-col flex-wrap max-sm:gap-8 max-lg:gap-5">
        <div className="w-[45%] h-[] bg-[#] flex  flex-col max-sm:w-full  gap- max-lg:w-full max-sm:gap-3 max-lg:gap-4 justify-between
        ">
          <b className="text-[#a176f9] sm:text-[30px] md:text-md lg:text-lg xl:text-5xl" data-aos="fade-left">My Experience</b>
        
          {
            Experience.map((data) => (
              <div className="w-full justify-center max-sm:p-3 flex-col flex gap-2 rounded-xl max-lg:p-4 max-xl:p-20 max-2xl:p-8 hover:text-[#fff] hover:bg-[#a176f9] bg-[#140c1c] cursor-pointer" key={data.id} data-aos="fade-right">
            <span className="text-[#fff]">{data.path}</span>
            <b className="text-[#ffff]">{data.role}</b>
            <span className="text-[#fff]">{data.year}</span>
          </div>
            ))
          }
          
         
         
         
        </div>
        <div className="w-[45%] h-[] bg-[#] flex  flex-col max-sm:w-full  gap-  max-lg:w-full max-sm:gap-3 max-lg:gap-4 justify-between
        ">
          <b className="text-[#a176f9] sm:text-[30px] md:text-md lg:text-lg xl:text-5xl center jb" data-aos="zoom-in-right">My Education</b>
          
         
             {
            education.map((data) => (
              <div className="w-full justify-center max-sm:p-3 flex-col flex gap-2 rounded-xl max-lg:p-4 max-xl:p-20 max-2xl:p-8 hover:text-[#fff] hover:bg-[#a176f9] bg-[#140c1c] cursor-pointer" key={data.id} data-aos="fade-in">
            <span className="text-[#fff]">{data.year}</span>
            <b className="text-[#ffff]">{data.role}</b>
            <span className="text-[#fff]">{data.path}</span>
          </div>
            ))
          }
         
        </div>
        

      </div>
    </section>
  )
}

export default MyExperience
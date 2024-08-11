import { HiOutlineAcademicCap } from "react-icons/hi"
import { IoShieldCheckmarkOutline } from "react-icons/io5"
import { LiaGraduationCapSolid } from "react-icons/lia"


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
      year:"2023/2024",
      role:"Role: Back-End Developer",
      path:"Projects: Work on Authentication systems, CURD"

    },
    {
      id:3,
      year:"2024",
      role:"Role: Front-End & Back-end",
      path:"Projects: MERN-STACK"

    },
    {
      id:3,
      year:"2023",
      role:"UI/UX",
      path:"Projects: Design Website"

    },
  ] 
  const education = [
    {
      id:1,
      year:"2023/2024",
      role:"School: Free CodeCamp",
      path:"Role: Front-End"

    },
    {
      id:2,
      year:"2023/2024",
      role:"School: CodeLab",
      path:"Role: Back-End Developer & Front-End Developer & UI/UX"

    },
    { 
      id:3,
      year:"2024",
      role:"Free CodeCamp",
      path:"Backend Developer"

    },
    { 
      id:4,
      year:"2024",
      role:"Online Class",
      path:"UI/UX"

    },
  ] 
  return (
    <section className="w-full h-[178vh] bg-[#000] justify-center items-center flex">
      <div className="w-[90%] h-[154vh] justify-between items- flex max-md:flex-col">
        <div className="w-[40%] h-auto max-md:w-full justify-between flex-col flex gap-6 max-lg:w-[47%]">
        <div className="flex items-center gap-6">
            <IoShieldCheckmarkOutline  className="text-[#8f5bf8]  max-md:text-2xl lg:text-4xl xl:text-5xl font-bold ease-in-out duration-700"/>
          <strong className="text-[#8f5bf8] sm:text-[50px] md:text-4xl lg:text-4xl xl:text-5xl font-bold ease-in-out duration-700" data-aos="fade-in">My Experience</strong>

        </div>
         {
        Experience.map((data) =>(
                <div className="w-full h- bg-[#140c1c] flex flex-col  justify-center max-md:p-4 p-10 rounded-lg hover:bg-[#8f5bf8] ease-in-out duration-700 cursor-pointer max-lg:w-[100%]" key={data.id} data-aos="fade-down">
          <b className="text-[#dddddd] md:text-md font-medium">{data.year}</b>
          <b className="text-[#fff] md:text-xl font-bold"> {data.role}</b>
          <b className="text-[#fff] md:text-sm font-medium">{data.path}</b>

        </div>
   
  ))
       }
        </div>
        <div className="w-[40%] h-auto max-md:w-full justify-between flex-col flex gap-6 max-lg:w-[47%]">
        <div className="flex items-center gap-6">
            <HiOutlineAcademicCap className="text-[#8f5bf8]  max-md:text-2xl lg:text-4xl xl:text-5xl font-bold ease-in-out duration-700"/>
          <strong className="text-[#8f5bf8] sm:text-[50px] md:text-4xl lg:text-4xl xl:text-5xl font-bold ease-in-out duration-700" data-aos="fade-in">My Education</strong>

        </div>
       {
        education.map((data) =>(
                <div className="w-full h- bg-[#140c1c] flex flex-col  justify-center max-md:p-4 p-10 rounded-lg hover:bg-[#8f5bf8] ease-in-out duration-700 cursor-pointer max-lg:w-[100%]" key={data.id} data-aos="fade-up">
          <b className="text-[#dddddd] md:text-md font-medium">{data.year}</b>
          <b className="text-[#fff] md:text-xl font-bold"> {data.role}</b>
          <b className="text-[#fff] md:text-sm font-medium">{data.path}</b>

        </div>
  ))
       }
  </div>
      </div>
    </section>
  )
}

export default MyExperience
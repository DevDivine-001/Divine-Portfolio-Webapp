

const MyQualityServices = () => {
  const QualityData = [
    {
      id:1,
      title:"01 Web Developer",
      subtitle:"Web developers create functional, user-friendly websites and web applications. They may write code, develop and test new applications, or monitor site performance and traffic.",
      icons:""
    },
    {
      id:2,
      title:"01 Frontend Developer",
      subtitle:"A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design.",
      icons:""
    },
    {
      id:3,
      title:"03 Backend Developer",
      subtitle:"The backend refers to devices that respond to ending user activities or requests, for example, routers, network servers, and email servers.",
      icons:""
    },
    {
      id:4,
      title:"04 UI/UX",
      subtitle:"A UI/UX developer is a specialized software developer who focuses on creating user interfaces and user experiences for a variety of products",
      icons:""
    },

  ]
  return (
    <section className="w-full h-[120vh] bg-[#050709] flex items-center justify-center max-xl:h-[106vh] max-sm:h-[110vh]">
  <div className="w-[90%] h-[100vh] flex flex-col gap- justify-between items-center bg-[] max-xl:h-[84vh] gap-3 max-sm:h-[100vh] max-sm:gap-7">
    <div className="flex flex-col items-center justify-center text-center
    max-2xl:w-[42%] gap-1 max-sm:w-full">
     <strong className="text-[#8f5bf8] sm:text-[30px] md:text-md lg:text-lg xl:text-5xl font-bold" data-aos="fade-in">My Quality Services</strong>
      <text className="text-[#d8d5df] sm:text-sm lg:text-lg xl:text-sm text-center max-md:w-full max-sm:w-full" data-aos="fade-in">I put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</text>
    </div>
    <div className="max-xl:h-[70vh] gap-3 max-lg:h-[85vh]">
   {
    QualityData.map((data) =>(
         <div className="justify-between items-center flex w-full max-2xl:xl:p-9 cursor-pointer hover:bg-[#442581] flex-wrap  rounded-xl max-sm:p-2 border-b-[1px] border-[#8f5bf8] max-lg:p-14 max-xl:p-80" key={data.id} data-aos="fade-up">
      <b className="text-[#d8d5df] sm:text-sm lg:text-lg xl:text-2xl">{data.title}</b>
      <div className="xl:w-[60%] bg-[]"><span className="sm:text-sm lg:text-lg xl:text-1xl text-[#d8d5df]">{data.subtitle}</span></div>
      <div className="sm:text-sm lg:text-lg xl:text-1xl text-[#d8d5df]">{data.icons}</div>
    </div>
    ))
   }
     
  
    
  
    </div>
    

  </div>
</section>
  )
}

export default MyQualityServices

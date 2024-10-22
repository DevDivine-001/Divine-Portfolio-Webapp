

const SkillsData = [
  {
    id:1,
    img:'https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png',
    title:'React',
    rate:'87%'
  },
  {
    id:2,
    img:'data:image/png;base64,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',
    title:'Javascript',
    rate:"80%"
  },
  {
    id:3,
    img:'https://miro.medium.com/v2/resize:fit:1000/1*C24eNZfu0CT5fSTBt6IugA.png',
    title:'Typescript',
    rate:'80%'
  },
  {
    id:4,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbP4rcqpqxOe_azxlyuxLDsqPvIoxEqMwXEJ6Qqb-wdsWP4PFF9sOGYa2IoLHLI9JhNc&usqp=CAU',
    title:'Tailwind Css',
    rate:'95%'
  },
  {
    id:5,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcIa88OTDamd4Lf3kawjtZMRwRlJSh47LNY2TT5hYYz7lCOoKhmKSBi25-LY3EoRr-10&usqp=CAU',
    title:'Node.js',
    rate:"86%"
  },
  {
    id:6,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiacsoXajIMdRDuY-AECAZk-zoA9Bi2wHQjV3H3XVxAP0F3P-BCqd9BgA51rGG619whs&usqp=CAU',
    title:'MongoDB',
    rate:"80%"
  },
  
]

const MySkills = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center bg-[#0f0715] max-md:h-[200vh]'>
      <div className="w-[90%] h-[70vh] flex flex-col justify-between  max-md:h-[185vh]">
         <div className="w-full flex justify-center items-center">
           <strong className="text-[#8f5bf8] sm:text-[50px] md:text-4xl lg:text-4xl xl:text-5xl font-bold ease-in-out duration-700 text-center" data-aos="fade-up">My Skills</strong>

        </div>
        <div className="w-full h-[78vh] flex  justify-between items-center max-md:flex-col max-md:h-auto gap-5">
          {
            SkillsData.map((data) =>(
                   <div className="w-[15%] flex flex-col justify-center items-center max-md:w-[60%] max-xl:w-[220%]" key={data.id} data-aos="fade-up">
            <div className="w-full flex items-center justify-center flex-col p-3 rounded-lg  ease-in-out duration-700  hover:bg-[#2a1454]">
            <img src={data.img} alt="" className="w-full h-[18vh] rounded-lg hover:scale-105 cursor-pointer ease-in-out duration-700"/>
             <strong className="text-[#8f5bf8] sm:text-[0px] md:text-md lg:text-md xl:text-xl font-bold ease-in-out duration-700 flex justify-center items-center hover:text-[#fff]">{data.rate}</strong>
            {/* 
        

             */}
          </div> 
          <span className="max-md:text-md font-medium text-[#dddddd]">{data.title}</span>
           </div>
            ))
          }  
          </div>
      </div>
    </section>
  )
}

export default MySkills
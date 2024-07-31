import { TbPhoneCall } from "react-icons/tb"


const Contact = () => {

  const Information = [
    {
      id:1,
      title:'Phone',
      inFor:'+2348072679674'
    },
    {
      id:2,
      title:'Email',
      inFor:'divineuwand84@Gamil.com'
    },
    {
      id:3,
      title:'Phone',
      inFor:'Lagos, Nigeria'
    },
  ] 
  
  return (
   <>
        {/* <div className="w-[100%] h-[90vh] bg-[red] flex justify-center items-center">
   
    <div className="w-[90%] h-[80vh] bg-[blue]">  About</div>

    </div> */}
    <section className="w-[100%] h-[120vh] justify-center items-center flex bg-[#050709]">
      <div className="flex w-[90%] h-[100vh] justify-between items-center bg-[]  max-sm:gap-4 max-md:gap-3 max-lg:gap-4 max-xl:flex max-sm:flex-col">
        <form action="" className="w-[45%] justify-center items-center gap-5 flex-col bg-[#140c1c] flex rounded-xl p-7 max-sm:w-full max-sm:gap-3 max-lg:w-full">
        <div className="flex flex-col w-[85%] gap-4 bg-[] h-[17vh] justify-center">  <b className="text-[#8f5bf8] font-bold text-sm xl:text-[40px] justify-center items-center max-sm:w-full">Let’s work together!</b>
          <span className="text-[#f5f0fe]">I design and code beautifully simple things and i love what i do. Just simple like that!</span></div>
          <input type="text" className="w-[85%] p-3 rounded-md outline-none border-none text-[#fff] bg-[#050709] max-sm:w-full" placeholder="Enter your name " />
          <input type="text" className="w-[85%] p-3 rounded-md outline-none max-sm:w-full border-none text-[#fff] bg-[#050709]" placeholder="Enter a valid email"/>
          <input type="text" className="w-[85%] p-3 rounded-md outline-none border-none text-[#fff] bg-[#050709] max-sm:w-full" placeholder="Enter a valid phone number"/>
          <textarea name="" id="" placeholder="Message" className="p-3 h-[180px] w-[85%] rounded-md bg-[#050709] outline-none border-none text-[#fff] max-sm:w-full max-sm:h-[80px] max-md:h-[90px]"></textarea>

          <div className="w-[85%] max-sm:w-full">
             <button
          className="py-2.5 px-7 relative flex justify-center shadow-md items-center gap-1  hover:before:translate-x-full overflow-hidden before:transition-transform before:duration-1000 ease-in-out text-[#5c34ad] before:bg-[#0F0715] before:absolute before:top-0 before:left-0 before:w-full before:h-full transition-colors duration-1000 before:z-[-1] z-10 hover:text-white rounded-md bg-[#5c34ad] border border-[#5c34ad] h-11 text-sm font-medium"
        >
         Send Email
        </button>
          </div>
        
        </form>

        <section className="flex bg-[] flex-col justify-between gap-6 w-[30%] max-sm:w-full max-lg:w-full max-xl:w-[%] max-xl:justify-between">
         {
          Information.map((data) =>(
             <div className="flex  -8 w-full max-sm:gap-5 max-lg:justify-between max-xl:w-full bg-[] max-xl:gap-[120px] max-2xl:gap-[100px]" key={data.id}>
            <div
             className="h-10 w-10 relative flex justify-center shadow-md items-center gap-1  hover:before:translate-x-full overflow-hidden before:transition-transform before:duration-1000 ease-in-out text-[#fff] before:bg-[#5c34ad] before:absolute before:top-0 before:left-0 before:w-full before:h-full transition-colors duration-1000 before:z-[-1] z-10 hover:text-white rounded-full bg-[#050709] border-[1px] border-[#5c34ad] text-sm font-medium animate-bounce cursor-pointer">
              <TbPhoneCall size={18} />

            </div>
            <div className="w-[%] bg-[] flex-col flex max-lg:w-[60%] max-xl:w-[">
              <span className="text-[#f5f0fe] sm:text-sm xl:text-1xl md:text-md lg:text-lg">{data.title}</span>
              <b className="text-[#f5f0fe] max-sm:text-sm max-lg:text-[25px] max-md:text-sm">{data.inFor}</b>

            </div>

          </div>
          ))
         }

        </section>

      </div>
    </section>
     </>
  )
}

export default Contact
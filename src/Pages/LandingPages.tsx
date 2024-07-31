import Hero from "./Home/Hero"
import LetWorkTogether from "./Home/LetWorkTogether"
// import LetWorkTogether from "./Home/"
import MyExperience from "./Home/MyExperience"
import MyQualityServices from "./Home/MyQualityServices"
import MyRecentProject from "./Home/MyRecentProject"
import MySkills from "./Home/MySkills"


const LandingPages = () => {
  return (
    <div>
      <Hero/>
      <MyQualityServices/>
      <MyRecentProject/>
      <MyExperience/>
      <MySkills/>
      <LetWorkTogether/>
    </div>
  )
}

export default LandingPages

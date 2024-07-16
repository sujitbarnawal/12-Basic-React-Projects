
import { useEffect, useState } from "react"
import Background from './Components/Background/Background'
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"


const App = () => {

  let hero_data = [
    { text1: "Dive in to", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ]

  const [herocount, setherocount] = useState(0)
  const [playstatus, setplaystatus] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setherocount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 3000);
  }, []);

  return (
    <div>
      <Background playstatus={playstatus} herocount={herocount} />
      <Navbar />
      <Hero
        playstatus={playstatus}
        setplaystatus={setplaystatus}
        hero_data={hero_data[herocount]}
        herocount={herocount}
        setherocount={setherocount}
      />
    </div>
  )
}

export default App

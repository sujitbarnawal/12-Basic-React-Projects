/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Hero.css'

import arrow_icon from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({ hero_data, herocount, setherocount, playstatus, setplaystatus }) => {
  return (
    <div className='hero'>
      <div className="text">
        <p>{hero_data.text1}</p>
        <p>{hero_data.text2}</p>
      </div>
      <div className="explore">
        <p>Explore the features</p>
        <img src={arrow_icon} alt="" />
      </div>
      <div className="dot-play">
        <ul className='dots'>
          <li onClick={()=>{setherocount(0)}} className={herocount===0?"dot orange":"dot"}></li>
          <li onClick={()=>{setherocount(1)}} className={herocount===1?"dot orange":"dot"}></li>
          <li onClick={()=>{setherocount(2)}} className={herocount===2?"dot orange":"dot"}></li>
        </ul>
        <div className="video-play">
          <img onClick={()=>setplaystatus(!playstatus)} src={playstatus?pause_icon:play_icon}/>
          <p>See the video </p>
        </div>
      </div>
    </div>
  )
}

export default Hero

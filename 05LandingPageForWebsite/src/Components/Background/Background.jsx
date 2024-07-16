/* eslint-disable react/prop-types */
import './Background.css'

import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import video1 from '../../assets/video1.mp4'

const Background  = ({playstatus,herocount}) => {
  if(playstatus){
    return(
      <video className='background fade-in' autoPlay loop muted>
        <source  src={video1} type='video/mp4'/>
      </video>
    )
  }
  else if(herocount===0){
    return(
      <img className='background fade-in' src={image1}/>
    )
  }
  else if(herocount===1){
    return(
      <img className='background fade-in' src={image2}/>
    )
  }
  else if(herocount===2){
    return(
      <img className='background fade-in' src={image3}/>
    )
  }
}

export default Background

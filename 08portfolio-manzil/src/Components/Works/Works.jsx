import './Works.css'
import portfolio1 from '../../assets/portfolio1.jpeg'
import portfolio2 from '../../assets/portfolio2.jpeg'
import portfolio3 from '../../assets/portfolio3.jpeg'
import portfolio4 from '../../assets/portfolio4.jpeg'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.jpeg'

const Works = () => {
  return (
    <section id="works">
        <h2 className="work-title">My Portfolio</h2>
        <span className='work-description'>
            I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skills and experience to help businesses achieve the goal and create a strong online presence.
        </span>
        <div className="work-images">
            <img src={portfolio1} className="work-image" />
            <img src={portfolio2} className="work-image" />
            <img src={portfolio3} className="work-image" />
            <img src={portfolio4} className="work-image" />
            <img src={portfolio5} className="work-image" />
            <img src={portfolio6} className="work-image" />
        </div>
        <a href="https://github.com/destny69" target='_blank'><button className='work-btn'>See more</button></a>
    </section>
  )
}

export default Works

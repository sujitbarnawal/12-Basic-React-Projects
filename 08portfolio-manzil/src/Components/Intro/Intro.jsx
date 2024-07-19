import './Intro.css'
import bg from '../../assets/profile.jpeg'
import hire_icon from '../../assets/hire.png'

const Intro = () => {
  return (
    <section id='intro'>
      <div style={{ display: 'flex', justifyContent: "center", gap: "50px" }} className='flex'>
        <div className="profile">
          <img src={bg} className='bg' />
        </div>
        <div className="intro-content">
          <span className='hello'>Hello,</span>
          <span className='intro-text'>I am <span className="intro-name">Manzil</span><br />Backend Developer</span>
          <p className="intro-para">I am a skilled backend developer with experience in building <br /> and maintaining the mechanisms that process data and perform actions on websites.</p>
          <button onClick={() => {
            document.getElementById("contacts").scrollIntoView()
          }} className='btn'> <img src={hire_icon} className='btn-image' />Hire Me</button>
        </div>
      </div>
    </section>
  )
}

export default Intro

import './Skills.css'
import ui_icon from '../../assets/ui.png'
import web_icon from '../../assets/web.jpeg'
import app_icon from '../../assets/app.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skill-title'>What I do</span>
            <span className='skill-description'>
                I ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers. They use code that helps browsers communicate with databases, store, understand, and delete data.
            </span>
            <div className="skill-bars">
                <div className="skill-bar">
                    <img src={ui_icon}className='skill-bar-image' />
                    <div className="skill-bar-text">
                        <h2>UI/UX Design</h2>
                        <p>Interactivity, look, and feel of a product screen or web page</p>
                    </div>
                </div>
                <div className="skill-bar">
                    <img src={web_icon} className='skill-bar-image' />
                    <div className="skill-bar-text">
                        <h2>Web Design</h2>
                        <p>The user experience aspects of website development </p>
                    </div>
                </div>
                <div className="skill-bar">
                    <img src={app_icon} className='skill-bar-image' />
                    <div className="skill-bar-text">
                        <h2>App Design</h2>
                        <p>The user experience aspects of app development </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills

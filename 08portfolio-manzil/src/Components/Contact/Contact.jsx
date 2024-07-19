import './Contact.css'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.jpeg'
import client3 from '../../assets/client3.png'
import client4 from '../../assets/client4.jpeg'
import facebook_icon from '../../assets/facebook.svg'
import instagram_icon from '../../assets/instagram.svg'
import github_icon from '../../assets/github.svg'
import linkedIn_icon from '../../assets/linkedIn.svg'

import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('destinyserver', 'first_temp', form.current, {
            publicKey: 'WwcgycZiYfKbBWZM_',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Message Sent")
              e.target.reset()
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

    return (
        <section id="contact-page">
            <div id="clients">
                <h2 className="client-title">My Clients</h2>
                <span className='client-description'>
                    I have had the opportunities to work with the diverse group of companies.
                    Some of the notable companies I have worked with includes
                </span>
                <div className="client-images">
                    <img src={client1} className="client-image" />
                    <img src={client2} className="client-image" />
                    <img src={client3} className="client-image" />
                    <img src={client4} className="client-image" />
                </div>
            </div>
            <div id="contacts">
                <h2 className="contact-title">Contact Me</h2>
                <span className='contact-description'>
                    Please fill out the form to discuss any work opportunities.
                </span>
                <form className="contact-form" onSubmit={sendEmail} ref={form}>
                    <input type="text" className='name' placeholder='Your name' name='from_name'/>
                    <input type="email" className='email' placeholder='Your email' name='your_email'/>
                    <textarea name="message" rows="5" placeholder='Your message' className='msg'></textarea>
                    <button className='submit-btn' type='submit' value="Send" >Submit</button>
                    <div className="links">
                        <a href="https://www.facebook.com/profile.php?id=100012811814075" target='_blank'><img src={facebook_icon} className="link" /></a>
                        <a href="https://www.instagram.com/des_tny_/" target='_blank'><img src={instagram_icon} className="link" /></a>
                        <a href="https://github.com/destny69" target='_blank'><img src={github_icon} className="link" /></a>
                        <a href="https://www.linkedin.com/in/manjil-gautam-2b2226197/?originalSubdomain=np" target='_blank'><img src={linkedIn_icon} className="link" /></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact

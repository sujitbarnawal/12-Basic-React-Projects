/* eslint-disable no-undef */
import logo from '../../assets/chatgpt.svg'
import add_icon from '../../assets/add-30.png'
import message_icon from '../../assets/message.svg'
import home_icon from '../../assets/home.svg'
import saved_icon from '../../assets/bookmark.svg'
import rocket_icon from '../../assets/rocket.svg'
import './Sidebar.css'

const Sidebar = () => {

    // const handleQuery = async (e) => {
    //     const text = e.target.value;
    //     setMessages([
    //         ...messages,
    //         { text, isBot: false }
    //     ])
    //     const res = await sendMsgToOpenAI(text)
    //     setMessages([
    //         ...messages,
    //         { text: input, isBot: false },
    //         { text: res, isBot: true }
    //     ])
    // }

    return (
        <div className='side-bar'>

            <div className="upper-side">

                <div className="top">

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img className='logo' src={logo} />
                        <span className='brand'>ChatGPT</span>
                    </div>
                    <div>
                        <button className='btn' onClick={() => { window.location.reload() }}>
                            <img className='add' src={add_icon} />New Chat
                        </button>
                    </div>

                </div>

                <div className="bottom">

                    <div>
                        <button className="query" value={"What is Programmming?"} onClick={(e) => { handleQuery(e) }} >
                            <img src={message_icon} />What is Programming?
                        </button>
                    </div>
                    <div>
                        <button className="query" value={"How to use an API?"} onClick={(e) => { handleQuery(e) }} >
                            <img src={message_icon} />How to use an API?
                        </button>
                    </div>

                </div>

            </div>

            <div className="lower-side">
                <div className="list-items">
                    <img className="list-item-image" src={home_icon} />Home
                </div>
                <div className="list-items">
                    <img className="list-item-image" src={saved_icon} />Saved
                </div>
                <div className="list-items">
                    <img className="list-item-image" src={rocket_icon} />Upgrade To Pro
                </div>
            </div>
        </div>
    )
}

export default Sidebar

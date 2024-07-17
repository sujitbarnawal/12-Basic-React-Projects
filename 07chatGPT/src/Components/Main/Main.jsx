import './Main.css'
import send_icon from '../../assets/send.svg'
// import user_icon from '../../assets/user-icon.png'
// import logoGPT from '../../assets/chatgptLogo.svg'

// import { sendMsgToOpenAI } from '../../Openai'
// import { useEffect, useRef, useState } from 'react'

const Main = () => {

  // const msgEnd=useRef(null)

  // const [input, setInput] = useState("")

  // const [messages, setMessages] = useState([
  //   {
  //     text: "Hi, I am ChatGPT, a state-of-the-art language model developed by",
  //     isBot: true,
  //   }
  // ])

  // useEffect(()=>{
  //   msgEnd.current.scrollIntoView();
  // },[messages])

  // const sendhandle = async () => {
  //   const text=input;
  //   setInput("")
  //   setMessages([
  //     ...messages,
  //     {text,isBot:false}
  //   ])
  //   const res = await sendMsgToOpenAI(text)
  //   setMessages([
  //     ...messages,
  //     { text: input, isBot: false },
  //     { text: res, isBot: true }
  //   ])
  //   // console.log(res);
  // }

  // const handleEnter=async (e)=>{
  //   if(e.key==='Enter'){
  //     await sendhandle();
  //   }
  // }


  return (
    <div className='main'>

      <div className="chats">
        {/* {messages.map((message, i) => {
          return (
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img className='chat-image' src={message.isBot ? logoGPT : user_icon} />
              <p className="txt">{message.text}</p>
            </div>
          )
        })} */}
        {/* <div ref={msgEnd} /> */}
      </div>

      <div className="chat-footer">

        <div className="inp">
          <input type="text" placeholder='Message ChatGPT' /* value={input} onKeyDown={(e)=>handleEnter(e)} onChange={(e) => { setInput(e.target.value) }} */ />
          <button className="send" /* onClick={() => { sendhandle }} */ >
            <img src={send_icon} />
          </button>
        </div>
        <p>ChatGPT may produce inaccurate information about people,places,or facts.ChatGPT August 20 Version.</p>

      </div>

    </div>
  )
}

export default Main

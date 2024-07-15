/* eslint-disable no-unused-vars */
import React, { useState,useRef } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data = ["", "", "", "", "", "", "", "", ""]

const TIcTacToe = () => {

    const [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)
    const titleRef = useRef(null)

    const box1Ref = useRef(null)
    const box2Ref = useRef(null)
    const box3Ref = useRef(null)
    const box4Ref = useRef(null)
    const box5Ref = useRef(null)
    const box6Ref = useRef(null)
    const box7Ref = useRef(null)
    const box8Ref = useRef(null)
    const box9Ref = useRef(null)
    
    let boxRef_array=[box1Ref,box2Ref,box3Ref,box4Ref,box5Ref,box6Ref,box7Ref,box8Ref,box9Ref]

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src="${cross_icon}"/>`
            data[num] = 'x'
            setCount(count => count + 1)
        }
        else {
            e.target.innerHTML = `<img src="${circle_icon}"/>`
            data[num] = 'o'
            setCount(count => count + 1)
        }
        checkWin()
    }

    const checkWin = () => {
        if (data[0] == data[1] && data[1] == data[2] && data[2] != "") {
            won(data[2])
        }
        else if (data[3] == data[4] && data[4] == data[5] && data[5] != "") {
            won(data[5])
        }
        else if (data[6] == data[7] && data[7] == data[8] && data[8] != "") {
            won(data[8])
        }
        else if (data[0] == data[3] && data[3] == data[6] && data[6] != "") {
            won(data[6])
        }
        else if (data[1] == data[4] && data[4] == data[7] && data[7] != "") {
            won(data[7])
        }
        else if (data[2] == data[5] && data[5] == data[8] && data[8] != "") {
            won(data[8])
        }
        else if (data[0] == data[4] && data[4] == data[8] && data[8] != "") {
            won(data[8])
        }
        else if (data[2] == data[4] && data[4] == data[6] && data[6] != "") {
            won(data[6])
        }
    }

    const won = (winner) => {
        setLock(true)
        if(winner==="x"){
            titleRef.current.innerHTML=`Congratulations <img src=${cross_icon}>`
        }
        else{
            titleRef.current.innerHTML=`Congratulations <img src=${circle_icon}> `
        }
    }

    const reset = () => {
        setLock(false)
        data=["","","","","","","","",""]
        titleRef.current.innerHTML=`Tic Tac Toe in<span>&nbsp;React</span>`
        boxRef_array.map((e)=>{
            e.current.innerHTML=""
        })
    }

    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>Tic Tac Toe in<span>&nbsp;React</span></h1>
            <div className='board'>
                <div className="row1">
                    <div ref={box1Ref} onClick={(e) => { toggle(e, 0) }} className="boxes"></div>
                    <div ref={box2Ref} onClick={(e) => { toggle(e, 1) }} className="boxes"></div>
                    <div ref={box3Ref} onClick={(e) => { toggle(e, 2) }} className="boxes"></div>
                </div>
                <div className="row2">
                    <div ref={box4Ref} onClick={(e) => { toggle(e, 3) }} className="boxes"></div>
                    <div ref={box5Ref} onClick={(e) => { toggle(e, 4) }} className="boxes"></div>
                    <div ref={box6Ref} onClick={(e) => { toggle(e, 5) }} className="boxes"></div>
                </div>
                <div className="row3">
                    <div ref={box7Ref} onClick={(e) => { toggle(e, 6) }} className="boxes"></div>
                    <div ref={box8Ref} onClick={(e) => { toggle(e, 7) }} className="boxes"></div>
                    <div ref={box9Ref} onClick={(e) => { toggle(e, 8) }} className="boxes"></div>
                </div>
            </div>
            <button className='reset' onClick={() => { reset() }}>Reset</button>
        </div>
    )
}

export default TIcTacToe

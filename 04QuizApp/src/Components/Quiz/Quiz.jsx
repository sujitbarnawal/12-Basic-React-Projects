/* eslint-disable no-const-assign */

import { useState, useRef } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'

const Quiz = () => {

    const [index, setindex] = useState(0)
    const [question, setquestion] = useState(data[0])
    const [lock, setlock] = useState(false)
    const [score, setscore] = useState(0)
    const [result, setresult] = useState(false)

    const option1Ref = useRef(null)
    const option2Ref = useRef(null)
    const option3Ref = useRef(null)
    const option4Ref = useRef(null)

    let option_array = [option1Ref, option2Ref, option3Ref, option4Ref]

    const checkAnswer = (e, ans) => {
        if (lock === false) {
            if (ans === question.ans) {
                e.target.classList.add("correct")
                setlock(true)
                setscore(score => score + 1)
            } else {
                e.target.classList.add("wrong")
                setlock(true)
                option_array[question.ans - 1].current.classList.add('correct')
            }
        }
    }


    const nextQuestion = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setresult(true)
                return 0;
            }
            setindex(index+1)
            setquestion(data[index+1])
            setlock(false)
            option_array.map((option) => {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null;
            })
        }
    }

    const reset = () => {
        setlock(false)
        setindex(0)
        setresult(false)
        setscore(0)
        setquestion(data[0])
    }

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            {result ?
                <>
                    <h2>You scored {score} out of {data.length}</h2>
                    <button onClick={() => { reset() }}>Reset</button>
                </> :
                <>
                    <h2>{question.question}</h2>
                    <ul>
                        <li ref={option1Ref} onClick={(e) => { checkAnswer(e, 1) }}>{question.option1}</li>
                        <li ref={option2Ref} onClick={(e) => { checkAnswer(e, 2) }}>{question.option2}</li>
                        <li ref={option3Ref} onClick={(e) => { checkAnswer(e, 3) }}>{question.option3}</li>
                        <li ref={option4Ref} onClick={(e) => { checkAnswer(e, 4) }}>{question.option4}</li>
                    </ul>
                    <button onClick={() => { nextQuestion() }}>Next</button>
                    <div className='index'>{index + 1} of {data.length} questions</div>
                </>
            }


        </div>
    )
}

export default Quiz

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react'

import './AIImageGenerator.css'
import default_image from '../assets/default_image.svg'

const AIimageGenerator = () => {

    const [imageURL, setimageURL] = useState("/")

    const inputRef = useRef(null)

    const [loading,setLoading]=useState(false)

//     const imageGenerator = async () => {
        
//         if (inputRef.current.value === "") {
//             return 0;
//         }
//         setLoading(true)
//         const response = await fetch(
//             "https://api.openai.com/v1/images/generations",{
//             method: "POST",
//             headers:{
//                 "Content-Type":"application/json",
//                 Authorization:"Bearer sk-None-IEHxb9wYsi90RJU41JxFT3BlbkFJSAozs9BfcGO6O0unfycx",
//                 "User-Agent":"Chrome",
//             },
//             body:JSON.stringify({
//                 prompt:`${inputRef.current.value}`,
//                 n:1,
//                 size:"512x512",
//             }),
//         });
//         let data = await response.json()
//         // console.log(data)
//         let data_array=data.data;
//         setimageURL(data_array[0].url)
//         setLoading(false)
//     }



    return (
        <div className='image-generator'>
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image">
                    <img src={imageURL === "/" ? default_image : imageURL} alt="" />
                </div>
                <div className="loading">
                    <div className={loading?"loading-bar-full":"loading-bar"}></div>
                    <div className={loading?"loading-text":"loading-none"}>Loading...</div>
                </div>
            </div>
            <div className="search-box">
                <input ref={inputRef} type="text" className='search-input' placeholder='Describe what you want to generate' />
                <div className="generateBtn" onClick={()=>{imageGenerator()}}>Generate</div>
            </div>
        </div>
    )

}
export default AIimageGenerator

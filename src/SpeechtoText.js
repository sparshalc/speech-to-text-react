import { useEffect } from "react"
import { useState } from "react"
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"

const SpeechtoText = () => {
    const {transcript, resetTranscript} = useSpeechRecognition()
    return (
        <div className="mainComp">
            <form>
                <textarea id="text" value={transcript} cols={100} rows={30} ></textarea>  
            </form>            
            <div className="btns">
                <button onClick={(e)=>{
                    e.preventDefault()
                    SpeechRecognition.startListening({continuous: true})
                }}>Start Listening</button>
                <button onClick={(e)=>{
                    e.preventDefault()
                    SpeechRecognition.stopListening({continuous: true})
                }}>Stop Listening</button>
                <button onClick={resetTranscript} className="clear">Clear</button>
            </div>
            <div class="footer">
                <p id="tip"> 🎙️ Press <span> Start Listening </span> to start! </p>
            </div>

        </div>
    )
}

export default SpeechtoText
import React from "react";
// import {useSpeechRecognition} from 'react-speech-recognition'
// import Modal from "./Modal";

export default function Form() {
  // const [inpValue,setInpValue] = React.useState<string>('')
  // const [isListening, setIsListening] = React.useState<boolean>(false)  
  // const {listening,resetTranscript,finalTranscript,isMicrophoneAvailable,transcript,browserSupportsSpeechRecognition} = useSpeechRecognition({transcribing:isListening})
  
  // const openMic = () :void | React.ReactElement =>{
  //   setIsListening(true)
  //   if(browserSupportsSpeechRecognition){
  //     if(isMicrophoneAvailable){
  //       setInpValue(transcript)
  //     }else{
  //       return <div className="alert alert-danger alert-dismissible fade show" role="alert" data-tor="show:[rotateX.from(90deg) @--tor-translateZ(-5rem; 0rem) pull.down(full)] slow">
  //        You do not have microphone !
  //       <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  //     </div>
  //     }
  //   }else{
  //     return <div className="alert alert-danger alert-dismissible fade show" role="alert" data-tor="show:[rotateX.from(90deg) @--tor-translateZ(-5rem; 0rem) pull.down(full)] slow">
  //     Your browser does not support this !
  //     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  //   </div>
  //   }
  // }
  // const closeMic = () =>{
    
  // }
  // const start = ()=>{
  //   setTimeout(()=>{
  //     return <Modal time={4} trans="44"/>
  //   },50)
  // }
  return (
    <div className="w-100 translate-middle-y">
      <form className="w-full d-flex align-items-center form">
        <div className="w-100 d-flex align-items-center border border-black form-floating bg-simple rounded">
          <input
            type="text"
            className="form-control bg-simple border-0"
            id="floatingInput"
            // onInput={(e:React.ChangeEvent<HTMLInputElement>)=>setInpValue(e.target.value)}
            placeholder="Add to do tasks..."
            name="body"
            // value={inpValue}
          />
          <label htmlFor="floatingInput">Add to do tasks...</label>
          <div className="px-2 py-1 fs-3 cursor-pointer">
            <i className="bi bi-mic-fill"></i>
          </div>
        </div>

        <button
          className="btn btn-primary d-flex align-items-center ms-2 px-3 py-2 fs-3"
          type="submit"
        >
          <span className="mx-2 text-white">add</span>
          <i className="bi bi-plus-circle text-white"></i>
        </button>
      </form>
    </div>
  );
}

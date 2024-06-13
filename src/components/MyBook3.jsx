import HTMLFlipBook from "react-pageflip"

import './MyBook.css'

import CameraIcon from "../assets/camera-icon.png"

function MyBook3(props) {
   return (

      <HTMLFlipBook width={320} height={460} usePortrait={true} showCover={true} className="book" drawShadow={false}>
         <div className="demoPage capa3"></div>
         <div className="demoPage page31"></div>
         <div className="demoPage page32"></div>
         <div className="demoPage page33"></div>
         <div className="demoPage page34"></div>
         <div className="demoPage page35">
            <a href="https://github.com/ricardokanashiro" target="_blank" className="link3">
               <img src={CameraIcon} />
            </a>
         </div>
         <div className="demoPage capa-final"></div>
      </HTMLFlipBook>
   );
}

export default MyBook3
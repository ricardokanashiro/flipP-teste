import HTMLFlipBook from "react-pageflip"

import './MyBook.css'

import CameraIcon from "../assets/camera-icon.png"

function MyBook2(props) {
   return (

      <HTMLFlipBook width={320} height={460} usePortrait={true} showCover={true} className="book" drawShadow={false}>
         <div className="demoPage capa2"></div>
         <div className="demoPage page21"></div>
         <div className="demoPage page22"></div>
         <div className="demoPage page23"></div>
         <div className="demoPage page24"></div>
         <div className="demoPage page25">
            <a href="https://ricardokanashiro.github.io/teste-b1/book2.html" target="_blank" className="link2">
               <img src={CameraIcon} />
            </a>
         </div>
         <div className="demoPage capa-final"></div>
      </HTMLFlipBook>
   );
}

export default MyBook2
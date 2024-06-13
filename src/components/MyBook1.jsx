import HTMLFlipBook from "react-pageflip"

import './MyBook.css'

import CameraIcon from "../assets/camera-icon.png"

function MyBook1(props) {
   return (

      <HTMLFlipBook width={320} height={460} usePortrait={true} showCover={true} className="book" drawShadow={false}>
         <div className="demoPage capa"></div>
         <div className="demoPage page1"></div>
         <div className="demoPage page2"></div>
         <div className="demoPage page3"></div>
         <div className="demoPage page4"></div>
         <div className="demoPage page5"></div>
         <div className="demoPage page6">
            <a href="https://ricardokanashiro.github.io/teste-b1/book1.html" target="_blank" className="link">
               <img src={CameraIcon} />
            </a>
         </div>
         <div className="demoPage capa-final"></div>
      </HTMLFlipBook>
   );
}

export default MyBook1
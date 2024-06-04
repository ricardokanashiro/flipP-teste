import HTMLFlipBook from "react-pageflip"

import './MyBook.css'

import CameraIcon from "../assets/camera-icon.png"

function MyBook(props) {
   return (

      <HTMLFlipBook width={400} height={580} usePortrait={true} showCover={true} className="book" maxShadowOpacity={0.4}>
         <div className="demoPage capa"></div>
         <div className="demoPage page1"></div>
         <div className="demoPage page2"></div>
         <div className="demoPage page3"></div>
         <div className="demoPage page4"></div>
         <div className="demoPage page5"></div>
         <div className="demoPage page6">
            <a href="https://github.com/ricardokanashiro" target="_blank">
               <img src={CameraIcon} className="link" />
            </a>
         </div>
         <div className="demoPage capa-final"></div>
      </HTMLFlipBook>

      // <HTMLFlipBook width={300} height={500} className="book">
      //   <div className="demoPage"></div>
      //   <div className="demoPage"></div>
      //   <div className="demoPage"></div>
      //   <div className="demoPage"></div>
      // </HTMLFlipBook>
   );
}

export default MyBook
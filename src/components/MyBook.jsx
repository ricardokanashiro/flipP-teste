import HTMLFlipBook from "react-pageflip"

import './MyBook.css'

function MyBook(props) {
  return (
    <HTMLFlipBook width={420} height={600} usePortrait={true} showCover={true}>
      <div className="demoPage capa"></div>
      <div className="demoPage contracapa"></div>
      <div className="demoPage page1"></div>
      <div className="demoPage page2"></div>
      <div className="demoPage page3"></div>
      <div className="demoPage page4"></div>
      <div className="demoPage page5"></div>
      <div className="demoPage page6"></div>
      <div className="demoPage contracapa"></div>
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
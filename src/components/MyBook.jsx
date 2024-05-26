import HTMLFlipBook from "react-pageflip"

import './MyBook.css'

function MyBook(props) {
  return (
    <HTMLFlipBook width={400} height={500} usePortrait={true} showCover={true}>
      <div className="demoPage"></div>
      <div className="demoPage"></div>
      <div className="demoPage"></div>
      <div className="demoPage"></div>
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
import HTMLFlipBook from "react-pageflip"

import './MyBook.css'

function MyBook() {
  return (
    <HTMLFlipBook width={200} height={250}>
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
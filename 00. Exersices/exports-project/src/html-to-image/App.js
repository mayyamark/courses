import React from "react";
import download from 'downloadjs'
import { 
  toPng, 
  // toJpeg, 
  // toBlob, 
  // toPixelData, 
  toSvg 
}  from 'html-to-image';
import Table from '../Table';

function App() {
  const htmlToImageRef = React.useRef();

  const printPNG = React.useCallback(() => {
    toPng(htmlToImageRef.current).then((dataUrl) => {
      console.log(dataUrl);
      download(dataUrl, 'html-to-image.png');
    });
  }, []);
  
  const printSVG = React.useCallback(() => {
    toSvg(htmlToImageRef.current).then((dataUrl) => {
      console.log(dataUrl);
      download(dataUrl, 'html-to-image.svg');
    });
  }, []);

  return (
    <>
      <h1>html-to-image</h1>
      <div ref={htmlToImageRef}>
        <Table />
      </div>
      <div style={{ margin: '20px 20px'}}>
        <button onClick={printPNG}>
          Download PNG
        </button>
        <button onClick={printSVG}>
          Download SVG
        </button>
      </div>
    </>
  );
}

export default App;

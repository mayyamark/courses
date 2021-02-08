import React from "react";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
import Table from "../Table";
import "./App.css";

function App() {
  const html2canvasRef = React.useRef();
  // const linkRef = React.useRef();

  const printPDF = React.useCallback(() => {
    html2canvas(html2canvasRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPdf("l", "mm", "a4"); //orientation: landscape
      const imgProps = pdf.getImageProperties(imgData);
      console.log(imgProps);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      console.log("pdfWidth " + pdfWidth);
      console.log("pdfHeight " + pdfHeight);
      console.log("imgProps.height " + imgProps.height);
      console.log("imgProps.width " + imgProps.width);

      console.log("refWidth " + html2canvasRef.current.offsetWidth);
      console.log("refHeight " + html2canvasRef.current.offsetHeight);

      pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
      pdf.save("html2canvas.pdf");
    });
  }, []);

  // const printSVG = React.useCallback(() => {
  //   html2canvas(html2canvasRef.current).then(canvas => {
  //     const imgData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  //     linkRef.current.setAttribute('href', imgData);
  //     linkRef.current.setAttribute('download', 'html2canvas.svg');
  //   });
  // }, []);

  return (
    <>
      <h1>html2canvas & jsPdf</h1>
      <div ref={html2canvasRef}>
        <Table />
      </div>
      <div style={{ margin: "20px 20px" }}>
        <button onClick={printPDF}>Download PDF</button>
        {/* <a ref={linkRef} onClick={printSVG}>
          Download SVG
        </a> */}
      </div>
    </>
  );
}

export default App;

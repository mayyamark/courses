import React from "react";
import Pdf from "react-to-pdf";
import Table from '../Table';

const reactToPdfRef = React.createRef();

const options = {
  orientation: 'landscape',
};

function App() {

  return (
    <div>
      <h1>react-to-pdf</h1>
      <p>Not working here?</p>
      <div ref={reactToPdfRef}>
        <Table />
      </div>
      <Pdf targetRef={reactToPdfRef} 
      options={options} 
      x={.5} y={.5} scale={0.8} 
      filename="react-to-pdf.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download PDF</button>}
      </Pdf>
    </div>
  );
}

export default App;
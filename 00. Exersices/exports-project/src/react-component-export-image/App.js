import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import Table from '../Table';

// const ComponentToPrint = React.forwardRef((props, ref) => (
//   <div ref={ref}>react-component-export-image</div>
// ));

const App = () => {
  const reactComponentExportImageRef = useRef();

  return (
    <>
      <h1>react-component-export-image</h1>
      <div ref={reactComponentExportImageRef}>
        <Table />
      </div>
      <div style={{ margin: '20px 20px'}}>
        <button onClick={() => exportComponentAsJPEG(reactComponentExportImageRef, { type: 'image/jpeg', fileName: 'react-component-export-image' })}>
          Export As JPEG
        </button>
        <button onClick={() => exportComponentAsPNG(reactComponentExportImageRef, { fileName: 'react-component-export-image' })}>
          Export As PNG
        </button>
        <button onClick={() => exportComponentAsPDF(reactComponentExportImageRef, { fileName: 'react-component-export-image' })}> 
          {/* options?? */}
          Export As PDF
        </button>
      </div>
    </>

    // <React.Fragment>
    //   <h1>react-component-export-image</h1>
    //   <ComponentToPrint ref={componentRef} />
    //   <button onClick={() => exportComponentAsJPEG(componentRef)}>
    //     Export As JPEG
    //   </button>
    //   <button onClick={() => exportComponentAsPDF(componentRef)}>
    //     Export As PDF
    //   </button>
    //   <button onClick={() => exportComponentAsPNG(componentRef)}>
    //     Export As PNG
    //   </button>
    // </React.Fragment>
  );
};

export default App;
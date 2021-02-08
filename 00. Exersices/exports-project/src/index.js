import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactPDF from './react-pdf/App';
import ReactComponentExportImage from './react-component-export-image/App';
import HTML2Canvas from './html2canvas/App'
import HTMLToImage from './html-to-image/App';
import ReactToPdf from './react-to-pdf/App';

ReactDOM.render(
  <React.StrictMode>
    <HTMLToImage />
    <hr style={{ height: '3px', backgroundColor: 'red'}} />
    <HTML2Canvas />
    <hr style={{ height: '3px', backgroundColor: 'red'}} />
    <ReactComponentExportImage />
    <hr style={{ height: '3px', backgroundColor: 'red', marginTop: '400px' }} />
    <ReactToPdf />
    <hr style={{ height: '3px', backgroundColor: 'red', marginBottom: '100px' }} />
    <ReactPDF />
  </React.StrictMode>,
  document.getElementById('root')
);
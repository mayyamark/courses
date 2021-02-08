import { useState } from "react";
import Modal from './Modal';
import "./App.css";

const WRAP_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div style={WRAP_STYLES} onClick={() => console.log('clicked from div from #root')}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} close={() => setIsOpen(false)}>
          I am a Modal
        </Modal>
      </div>

      <div style={OTHER_STYLES}>Other content</div>
    </>
  );
}

export default App;

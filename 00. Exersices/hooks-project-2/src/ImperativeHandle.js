import React from 'react'; 

const MyText = React.forwardRef((props, ref) => {
  const [text, setText] = React.useState('ABC');
  const pRef = React.useRef();
  
  React.useImperativeHandle(ref, () => ({
    getTextLength: () => text.length,
    getText: () => text,
    setTextStyle: () => pRef.current.setAttribute('style', 'color: red; font-weight: bold'),
    getElement: () => pRef.current, 
  }));
  
  // console.log(ref.getTextLength()); // нямам достъп до функцията тук

  return <p ref={pRef} onClick={() => setText(`${text}${text}`)}>{text}</p>;
});


const ImperativeHandle = () => {
  const myRef = React.useRef(null); // записвам референцията на <p> от MyText

  const handleClick = () => {
    const textInfo = {
      length: myRef.current.getTextLength(), 
      text: myRef.current.getText(),
      element: myRef.current.getElement(),
    }

    myRef.current.setTextStyle();
    console.log(textInfo);
  }
  return (
    <>
      <MyText ref={myRef} />
      <button onClick={handleClick}>Get text info</button>
    </>
  );

}

export default ImperativeHandle;




// const MyText = React.forwardRef((props, ref) => {
//   const pRef = React.useRef(null);
//   const initialText = React.useRef(Math.random());
  
//   const [text, setText] = React.useState(initialText.current);
  
//   React.useImperativeHandle(ref, () => ({
//     element: pRef.current,
//     initialText: initialText.current,
//     getTextLength: () => text.toString().length,
//     resetText: () => { setText(initialText.current); },
//   }));
  
//   return <p ref={pRef} onClick={() => { setText(`${text}${text}`); }}>{text}</p>;
// });


// // ------------------------------------------------------------------------------


// const myRef = React.useRef(null);
// const myOtherRef= React.useRef(null);
// <>
//   <MyText ref={element => { myRef.current = element; myOtherRef.current = element; }} />
//   <button onClick={() => { alert(myRef.current.initialText); }}>Initial text</button>
//   <button onClick={() => { alert(myRef.current.getTextLength()); }}>Get text length</button>
//   <button onClick={() => { myOtherRef.current.resetText(); }}>Reset text</button>
//   <button onClick={() => { myOtherRef.current.element.click(); } }>Click on P</button>
// </>
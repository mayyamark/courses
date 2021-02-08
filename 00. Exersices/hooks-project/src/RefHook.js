import { useRef } from "react";

const RefHook = () => {
  const formRef = useRef(null);

  const handleClickEvent = () => {
    const form = formRef.current;

    console.log(form); // returns <form> ... </form>
    console.log(formRef.current["firstname"]); // returns <input name="firstname" />

    console.log(`${form["firstname"].value} ${form["lastname"].value}`); // returns the values
  };

  return (
    <div style={{ margin: 'auto auto', paddingBottom: '100px' }}>
      <h1>useRef Hook Example:</h1>
      <form ref={formRef}>
        <input name="firstname" />
        <input name="lastname" />
      </form>
      <button onClick={handleClickEvent}>get value</button>
    </div>
  );
};

export default RefHook;

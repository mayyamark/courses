import { useLayoutEffect, useEffect, useRef, useState } from 'react';

const Layout = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useLayoutEffect(() => {
        const rect = ref.current.getBoundingClientRect();
        ref.current.removeAttribute('style');
        
        console.log('useLayoutEffect ' + rect.bottom); // изпълнява се ПРЕДИ компонентът да се покаже на екрана
    }, [open]);

    useEffect(() => {
        const rect = ref.current.getBoundingClientRect();
        ref.current.setAttribute('style', 'border: 20px solid red');

        console.log('useEffect ' + rect.bottom); // изпълнява се СЛЕД като компонентът да се покаже на екрана
    }, [open]);


    return (
        <div style={{ margin: "auto auto", paddingBottom: "100px" }}>
            <h1>useLayout Hook Example:</h1>
            <div ref={ref} >
                {open && <p style={{ padding: '100px' }}>I GOT IT!!</p>}
                <button onClick={() => setOpen((prevState) => !prevState)} >{open ? 'Close' : 'Open'}</button>
            </div>
        </div>
    );
};

export default Layout;
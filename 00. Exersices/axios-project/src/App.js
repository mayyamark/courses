import { useState, useEffect } from 'react';
import axios from './axios-config.js';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const result = await axios.get('/1');
      console.log(result);

      setData(result.data);
    })();
  }, []);

  console.log(data);
  return (
    <div className="App">
        {Object.keys(data).length > 0 && <div>
          <p>{data.id}</p>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>}
    </div>
  );
}

export default App;

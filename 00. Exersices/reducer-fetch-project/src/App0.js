import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false); // ако веднъж е fail-нала заявката, да може да се направи нов опит

      try {
        const result = await axios(url);
        console.log(result); // {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]); // без [] => непрекъснато се fetch-ва

  return (
    <>
      <form onSubmit={(ev) => {
        ev.preventDefault();
        // по default ще се submit-не
        setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
      }}>
      {/* <form></form> позволява submit чрез Enter */}
        <input type="text" value={query} onChange={(ev) => setQuery(ev.target.value)} />
        <button type="submit">Search</button>
      </form>
      {isError && <h3>There was an error....</h3>}
      {isLoading ? <h3>Loading....</h3> : <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>}
    </>
  );
}

export default App;
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import "./App.css";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        isError: false,
      };
    case "FETCH_FAIL":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

const useDataApi = (initialUrl, initialData) => {
  // custom hook
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });


  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });

      try {
        const result = await axios(url);
        console.log(result); // {data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}

        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAIL" });
        }
      }
    };

    fetchData();

    return () => didCancel = true;
  }, [url]);

  return [state, setUrl];
};
function App() {
  const [query, setQuery] = useState("redux");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    { hits: [] },
  );

  return (
    <>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          // по default ще се submit-не
          doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
        }}
      >
        {/* <form></form> позволява submit чрез Enter */}
        <input
          type="text"
          value={query}
          onChange={(ev) => setQuery(ev.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isError && <h3>There was an error....</h3>}
      {isLoading ? (
        <h3>Loading....</h3>
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;

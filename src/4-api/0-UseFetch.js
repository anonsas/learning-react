import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error('Wrong URL');
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
        setError(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted');
        } else {
          setLoading(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);

  return { data, loading, error };
};
export default useFetch;

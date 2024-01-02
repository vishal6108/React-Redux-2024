import { useEffect, useState } from "react";

function useFetch(fetchFn, initialState) {
  const [fetchedData, setFetcedhData] = useState(initialState);
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetcedhData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user places." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);
  return {
    fetchedData,
    setFetcedhData,
    isFetching,
    error,
  };
}

export default useFetch;

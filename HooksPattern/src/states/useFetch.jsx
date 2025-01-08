import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url).then((res) => res.json());
      console.log(response);
      setData(response);
    }

    fetchData();
  }, []);
  return { data };
}

import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_LOCAL_API;
const LOCAL_DB = import.meta.env.VITE_LOCAL_DB;
export default function DataFetch() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${LOCAL_DB}/api/vtubers`, {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();

      // Object.keys(data).map((talent) => {
      //   console.log(talent);
      // });
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An Error occured");
    }
  };
}

import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_LOCAL_API;
const LOCAL_DB = import.meta.env.VITE_LOCAL_DB;
export default function DataFetch() {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${LOCAL_DB}/api/vtubers`, {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return data;
  
}

import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_LOCAL_API;
const LOCAL_DB = import.meta.env.VITE_LOCAL_DB;
function DataFetch() {
  const [loading, setLoading] = useState<boolean>(true);
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
      if (!response.ok) throw new Error("Failed to fetch books");
      const data = await response.json();
      console.log(data);
      // Object.keys(data).map((talent) => {
      //   console.log(talent);
      // });

      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An Error occured");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  return <h1>Welcome</h1>;
}

export default BookManager;

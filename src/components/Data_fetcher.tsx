// src/components/FetchData.tsx
import { useEffect, useState } from "react";
import { fetchData } from "../firebase/firebase";
const collectionName: string = import.meta.env.VITE_FIREBASE_COLLECTION_NAME;
export default function DataFetcher() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedData = await fetchData(collectionName);
        console.log(fetchedData);
        setData(fetchedData);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Fetched Data:</h1>
    </div>
  );
}

import { useState, useEffect } from "react";

interface TestBook {
  id: number;
  title: string;
  author: string;
  year: number;
}

const API_URL = import.meta.env.VITE_LOCAL_API;

const BookManager = () => {
  const [books, setBooks] = useState<TestBook[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${API_URL}/books`, {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      if (!response.ok) throw new Error("Failed to fetch books");
      const data = await response.json();
      console.log(data);
      setBooks(data);
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

  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <h5>{book.author}</h5>
            <h5>{book.year}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default BookManager;

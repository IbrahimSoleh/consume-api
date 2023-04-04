import { useEffect, useState } from "react";
import Books from "./Books";
import { getAllBooks } from "../fetch/fetch";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <>
      <div className='news__data__main py-8 lg:py-20'>
        <h1 className='text-3xl text-center lg:text-3xl font-bold'>
          Books 
        </h1>

        <div className='news__all__data mt-8'>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            {books?.books?.map((book) => (
              <Books key={`${book.id} ${book.title}`} {...book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

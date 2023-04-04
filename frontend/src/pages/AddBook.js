import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookForm from "./FormBook";
import { getBookDetailById } from "../fetch/fetch";

export default function EditBookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  return <BookForm bookData={book} />;
}

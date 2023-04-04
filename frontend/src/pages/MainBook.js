import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBookDetailById } from "../fetch/fetch";
import { Button } from "@material-tailwind/react";

export default function BookDetails() {
  const [book, setBook] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  const handleDeleteBook = async () => {
    try {
      await deleteBook(id);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div my='6'>
          <div w='300px'>
            <img src={`http://localhost:8000/${book.image}`} alt={book.title} />
          </div>
          <div className='ml-8'>
            <div className='font-bold'>{book.title}</div>
            <div className='font-bold'>{book.author}</div>
            <div className='font-bold'>{book.publisher}</div>
            <div className='font-bold'>
              {book.year} | {book.pages} pages
            </div>
          </div>
        </div>
      )}
      {localStorage.getItem("token") && (
        <div>
          <Button onClick={handleDeleteBook}>Delete</Button>
          <Link to={`/editbook/${id}`}>
            <Button>Edit</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

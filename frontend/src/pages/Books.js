/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import { Card, CardHeader } from "@material-tailwind/react";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card key={id} className='w-60 m-5'>
        <CardHeader className='relative h-24'>
          <img
            className='h-full w-full'
            src={`http://localhost:8000/${image}`}
          />
        </CardHeader>
        <div className='m-5 font-bold'>
          <div className="p-2">
            title:
            {title}
          </div>
          <div className="p-2">
            year:
            {year}
          </div>
          <div className="p-2">
            author:
            {author}
          </div>
          <div className="p-2">
            Publisher:
            {publisher}
          </div>
        </div>
      </Card>
    </Link>
  );
}

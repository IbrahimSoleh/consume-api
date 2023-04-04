import { useEffect, useState } from "react";
import { createBook, editBook } from "../fetch/fetch";
import { Card, Input, Button } from "@material-tailwind/react";

export default function BookForm({ bookData }) {
  const [selectedImage, setSelectedImage] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!selectedImage) {
      //   console.log(error);
    }
    const formData = new FormData(event.target);
    if (bookData) {
      try {
        await editBook(
          bookData.id,
          formData.get("title"),
          formData.get("author"),
          formData.get("publisher"),
          parseInt(formData.get("year")),
          parseInt(formData.get("pages"))
        );
      } catch (error) {
        console.log(error);
      }
      return;
    }
    try {
      await createBook(formData);
      event.target.reset();
      setSelectedImage("");
    } catch (error) {}
  }

  useEffect(() => {
    if (bookData?.image) {
      setSelectedImage(`http://localhost:8000/${bookData?.image}`);
    }
  }, [bookData]);

  return (
    <Card color='transparent' shadow={false}>
      <form
        className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
        onSubmit={handleSubmit}
      >
        <div className='mb-4 flex flex-col gap-6'>
          <Input
            size='lg'
            label='Name'
            name='title'
            defaultValue={bookData?.title}
          />
          <Input
            size='lg'
            label='Author'
            name='author'
            required
            defaultValue={bookData?.author}
          />
          <Input
            size='lg'
            label='publisher'
            name='publisher'
            required
            defaultValue={bookData?.publisher}
          />
          <Input
            size='lg'
            label='year'
            name='year'
            type='number'
            defaultValue={bookData?.year}
          />
          <Input
            type='number'
            size='lg'
            label='pages'
            name='pages'
            required
            defaultValue={bookData?.pages}
          />
          {selectedImage && (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img src={selectedImage} alt='Selected Image' />
          )}
          <Input
            size='lg'
            label='images'
            name='image'
            type='file'
            accept='image/*'
            onChange={(e) => {
              const file = e.target.files[0];
              setSelectedImage(URL.createObjectURL(file));
            }}
          />
        </div>
        <Button type='submit'>{bookData ? "Edit Book" : "Create Book"}</Button>
      </form>
    </Card>
  );
}

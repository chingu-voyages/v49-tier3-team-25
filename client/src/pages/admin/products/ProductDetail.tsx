import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import axios from "axios";
import { toast } from "react-toastify";
import { setAllBooks } from "../../../redux/features/books/booksSlice";
import { Book } from "../../../lib/types";

export default function ProductDetail() {
  const { id } = useParams();

  const adminUser = useAppSelector((state) => state.adminAuth.value);
  const allBooks: Book[] = useAppSelector(
    (state: RootState) => state.books.value
  );
  const dispatch = useAppDispatch();

  const thisBook = allBooks.find((book) => book._id == id);

  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState(thisBook?.title);
  const [author, setAuthor] = useState(thisBook?.author);
  const [description, setDescription] = useState(thisBook?.description);
  // const [genre, setGenre] = useState(thisBook?.genre);
  const [salePrice, setSalePrice] = useState(thisBook?.salePrice);
  const [bookCoverId, setBookCoverId] = useState(
    thisBook?.imageUrls[0].slice(38, 49)
  );

  const successToast = (text: string) => toast.success(text);

  const handleCancel = () => {
    setIsEditMode(false);
    setTitle(thisBook?.title);
    setAuthor(thisBook?.author);
    setDescription(thisBook?.description);
    setBookCoverId(thisBook?.imageUrls[0].slice(38, 49));
    // setGenre(thisBook.genre);
    setSalePrice(thisBook?.salePrice);
  };

  const updateBook = async (updatedBook: Book) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/books/${thisBook?._id}/`,
        updatedBook,
        {
          headers: {
            Authorization: `Bearer ${adminUser?.token}`,
          },
        }
      );

      const updatedBooks = allBooks.map((book) =>
        book._id == thisBook?._id ? res.data.data : book
      );
      dispatch(setAllBooks(updatedBooks));
      successToast("Book has been updated!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditMode((prev) => !prev);
    const imageUrls = thisBook?.imageUrls.map(
      () => `https://covers.openlibrary.org/b/olid/${bookCoverId}-M.jpg`
    );

    const updatedBook = {
      title,
      author,
      description,
      genres: thisBook?.genres,
      sku: thisBook?.sku,
      stockQuantity: thisBook?.stockQuantity,
      costPrice: thisBook?.costPrice,
      discount: thisBook?.discount,
      tags: thisBook?.tags,
      imageUrls,
    };

    // @ts-expect-error - need to fix
    updateBook(updatedBook);
  };

  return (
    <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 mt-5">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-accent">
            {isEditMode ? `Edit ${thisBook?.title}` : `${thisBook?.title}`}
          </h2>
          <p className="text-sm text-gray-600">Manage product.</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* <div className="grid sm:grid-cols-12 gap-2 sm:gap-6"> */}

          {/* title */}
          <div className="sm:col-span-3">
            <label
              htmlFor="title"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Title
            </label>
          </div>
          <div className="sm:col-span-9">
            <input
              id="title"
              type="text"
              className={`${
                isEditMode ? "text-gray-800" : "text-gray-400"
              } py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={title}
              readOnly={!isEditMode}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* author */}
          <div className="sm:col-span-3">
            <label
              htmlFor="author"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Author
            </label>
          </div>
          <div className="sm:col-span-9">
            <input
              id="author"
              type="text"
              className={`${
                isEditMode ? "text-gray-800" : "text-gray-400"
              } py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={author}
              readOnly={!isEditMode}
              name="author"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          {/* summary */}
          <div className="sm:col-span-3">
            <label
              htmlFor="summary"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Description
            </label>
          </div>
          <div className="sm:col-span-9">
            <textarea
              id="description"
              rows={4}
              className={`${
                isEditMode ? "text-gray-800" : "text-gray-400"
              } py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={description}
              readOnly={!isEditMode}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* genre */}
          {/* <div className="sm:col-span-3">
            <label
              htmlFor="summary"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Genre */}
          {/* </label>
          </div>
          <div className="sm:col-span-9">
            <input
              id="genre"
              type="text"
              className={`${
                isEditMode ? "text-gray-800" : "text-gray-400"
              } py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={genre}
              readOnly={!isEditMode}
              name="description"
              onChange={(e) => setGenre(e.target.value)}
            />
          </div> */}

          {/* price */}
          <div className="sm:col-span-3">
            <label
              htmlFor="summary"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Price
            </label>
          </div>
          <div className="sm:col-span-9">
            <input
              id="price"
              type="text"
              className={`${
                isEditMode ? "text-gray-800" : "text-gray-400"
              } py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={salePrice}
              readOnly={!isEditMode}
              name="description"
              onChange={(e) => setSalePrice(Number(e.target.value))}
            />
          </div>

          {/* book cover id */}
          <div className="sm:col-span-3">
            <label
              htmlFor="title"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Book Cover Id
              <p className="text-xs">
                For example, OL30698173M from
                https://openlibrary.org/works/OL471940W/Poirot_investigates?edition=key%3A/books/OL30698173M{" "}
              </p>
            </label>
          </div>
          <div className="sm:col-span-9">
            <input
              id="title"
              type="text"
              className={`${
                isEditMode ? "text-gray-800" : "text-gray-400"
              } py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={bookCoverId}
              readOnly={!isEditMode}
              name="bookCoverId"
              // onChange={handleChange}
              onChange={(e) => setBookCoverId(e.target.value)}
            />
          </div>

          {/* book cover */}
          <div className="sm:col-span-3">
            <label
              htmlFor="title"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Current Book Cover
            </label>
          </div>
          <div className="sm:col-span-9 mt-2">
            <img
              src={thisBook?.imageUrls[0]}
              alt=""
              className="object-scale-down w-20 "
            />
          </div>

          <div className="mt-5 flex justify-end gap-x-2">
            {isEditMode && (
              <button
                onClick={handleCancel}
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              >
                Cancel
              </button>
            )}

            {isEditMode && (
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
              >
                Save changes
              </button>
            )}

            {!isEditMode && (
              <button
                type="button"
                onClick={() => setIsEditMode(true)}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
              >
                Edit Product
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

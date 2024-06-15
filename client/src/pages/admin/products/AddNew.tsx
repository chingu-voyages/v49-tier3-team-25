import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import axios from "axios";
import { toast } from "react-toastify";
import { addBookToBooks } from "../../../redux/features/books/booksSlice";

export default function AddNew() {
  const adminUser = useAppSelector((state) => state.adminAuth.value);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [bookCoverId, setBookCoverId] = useState("");
  const [salePrice, setSalePrice] = useState(0);

  const successToast = (text: string) => toast.success(text);

  const handleCancel = () => {
    setTitle("");
    setAuthor("");
    setDescription("");
    setBookCoverId("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      description,
      imageUrls: [
        `https://covers.openlibrary.org/b/olid/${bookCoverId}-M.jpg`,
        `https://covers.openlibrary.org/b/olid/${bookCoverId}-M.jpg`,
        `https://covers.openlibrary.org/b/olid/${bookCoverId}-M.jpg`,
      ],
      genres: ["test"],
      sku: Math.random().toString(),
      stockQuantity: 10,
      costPrice: 5,
      salePrice,
      discount: 0.25,
      tags: [],
    };

    console.log(newBook);
    console.log(adminUser.token);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/books`,
        newBook,
        {
          headers: {
            Authorization: `Bearer ${adminUser?.token}`,
          },
        }
      );

      console.log(res);

      dispatch(addBookToBooks(res.data.result));

      setTitle("");
      setAuthor("");
      setDescription("");
      setBookCoverId("");
      // setGenre();
      setSalePrice(0);

      successToast("Book has been added!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  return (
    <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 mt-5">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-accent">Add New Product </h2>
          <p className="text-sm text-gray-600">Add new book.</p>
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
              className={`
              
               py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Pride and Prejudice"
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
              className={` py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={author}
              name="author"
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. Jane Austen"
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
              className={` py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. One of the most universally loved and admired English novels, Pride and Prejudice, was penned as a popular entertainment. But the consummate artistry of Jane Austen (1775-1817) transformed this effervescent tale of rural romance into a witty, shrewdly observed satire of English country life that is now regarded as one of the principal treasures of English literature."
            />
          </div>

          {/* price */}
          <div className="sm:col-span-3">
            <label
              htmlFor="price"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Price
            </label>
          </div>
          <div className="sm:col-span-9">
            <input
              id="price"
              type="number"
              className={` py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              placeholder="0"
              value={salePrice}
              name="price"
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
              className={` py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={bookCoverId}
              name="bookCoverId"
              onChange={(e) => setBookCoverId(e.target.value)}
              placeholder="e.g. OL30698173M"
            />
          </div>

          {/* book cover preview */}
          <div className="sm:col-span-3">
            <label
              htmlFor="title"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Current Book Cover Preview
            </label>
          </div>
          <div className="sm:col-span-9 mt-2">
            <img
              src={`https://openlibrary.org/works/OL471940W/Poirot_investigates?edition=key%3A/books/${bookCoverId}`}
              alt=""
              className="object-scale-down w-20 "
            />
          </div>

          {/* genre */}
          {/* <div className="sm:col-span-3">
            <label
              htmlFor="genre"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Genre
            </label>
          </div>
          <div className="sm:col-span-9">
            <input
              id="genre"
              type="text"
              className={`${
                isEditMode ? "" : "text-gray-400"
              } py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={form.genre}
              readOnly={!isEditMode}
              name="genre"
              onChange={handleChange}
            />
          </div> */}

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              onClick={handleCancel}
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

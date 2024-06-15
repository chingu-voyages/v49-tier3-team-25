import React, { useState } from "react";

export default function AddNew() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    summary: "",
    genre: "",
    price: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  const handleCancel = () => {
    setForm({
      title: "",
      author: "",
      summary: "",
      genre: "",
      price: 0,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 mt-5">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-accent">New Product</h2>
          <p className="text-sm text-gray-600">Add new product.</p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* <div className="grid sm:grid-cols-12 gap-2 sm:gap-6"> */}

          {/* image */}
          <div className="sm:col-span-3">
            <label
              htmlFor="image"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Book Image
            </label>
          </div>
          <div className="sm:col-span-9 my-4">
            <div className="flex items-center gap-5 ">
              <div className="bg-gray-400 h-44 w-32 ring-white dark:ring-neutral-900 flex justify-center items-center ">
                <p className="text-center"> </p>
              </div>
              {/* <img
                className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
                src=""
                alt="Image Description"
              /> */}
              <div className="flex gap-x-2">
                <div>
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  >
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                    Upload photo
                  </button>
                </div>
              </div>
            </div>
          </div>

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
              className={` py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={form.title}
              name="title"
              onChange={handleChange}
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
              value={form.author}
              name="author"
              onChange={handleChange}
            />
          </div>

          {/* summary */}
          <div className="sm:col-span-3">
            <label
              htmlFor="summary"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Summary
            </label>
          </div>
          <div className="sm:col-span-9">
            <input
              id="summary"
              type="text"
              className={` py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={form.summary}
              name="summary"
              onChange={handleChange}
            />
          </div>

          {/* genre */}
          <div className="sm:col-span-3">
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
              className={`py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              value={form.genre}
              name="genre"
              onChange={handleChange}
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
              value={form.price}
              name="price"
              onChange={handleChange}
            />
          </div>

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
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

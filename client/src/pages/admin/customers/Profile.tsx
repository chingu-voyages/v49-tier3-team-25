import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    ...user,
  });
  const location = useLocation();

  useEffect(() => {
    const firstName = location.state.customer.name.split(" ")[0];
    const lastName = location.state.customer.name.split(" ")[1];

    setUser({
      firstName,
      lastName,
      email: location.state.customer.email,
    });
  }, []);

  // const { name } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setForm({
      ...form,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditMode((prev) => !prev);
    console.log(form);
  };

  return (
    <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="bg-white rounded-xl shadow p-4 sm:p-7 mt-5">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-accent">
            {isEditMode
              ? `Edit ${location.state.customer.name}'s Profile`
              : `${location.state.customer.name}'s Profile`}
          </h2>
          <p className="text-sm text-gray-600">
            Manage customer's account settings.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
            {/* name */}
            <div className="sm:col-span-3">
              <label
                htmlFor="af-account-full-name"
                className="inline-block text-sm text-gray-800 mt-2.5"
              >
                Full name
              </label>
            </div>
            <div className="sm:col-span-9">
              <div className="sm:flex">
                <input
                  id="account-full-name"
                  type="text"
                  className={`${
                    isEditMode ? "" : "text-gray-600"
                  } py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
                  //  @ts-expect-error - to fix
                  value={user?.firstName}
                  readOnly={!isEditMode}
                  name="firstName"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className={`${
                    isEditMode ? "" : "text-gray-600"
                  } py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-accentfocus:ring-accent disabled:opacity-50 disabled:pointer-events-none `}
                  // @ts-expect-error - to fix
                  value={user?.lastName}
                  readOnly={!isEditMode}
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* email */}
            <div className="sm:col-span-3">
              <label
                htmlFor="account-email"
                className="inline-block text-sm text-gray-800 mt-2.5"
              >
                Email
              </label>
            </div>
            <div className="sm:col-span-9">
              <input
                id="af-account-email"
                type="email"
                className={`${
                  isEditMode ? "" : "text-gray-600"
                } py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
                // @ts-expect-error - to fix
                value={user?.email}
                readOnly={!isEditMode}
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* address */}
          <div className="sm:col-span-3">
            <label
              htmlFor="address"
              className="inline-block text-sm text-gray-800 mt-2.5"
            >
              Address
            </label>
          </div>
          <div className="sm:col-span-9">
            <input
              id="address"
              type="text"
              className={`${
                isEditMode ? "" : "text-gray-400"
              } py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-accent focus:ring-accent disabled:opacity-50 disabled:pointer-events-none`}
              // value={form.address}
              readOnly={!isEditMode}
              name="address"
              onChange={handleChange}
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
            <button
              type="submit"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
              disabled
            >
              {isEditMode ? "Save changes" : "Edit Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

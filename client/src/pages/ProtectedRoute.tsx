// ProtectedRoute.js
import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const ProtectedRoute = () => {
  const user = useAppSelector((state: RootState) => state?.auth.value);

  // show unauthorized screen if no user is found in redux store
  if (!user) {
    return (
      <div className="max-w-[50rem] flex flex-col mx-auto size-full">
        {/* <!-- ========== MAIN CONTENT ========== --> */}
        <main id="content">
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
              401
            </h1>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Oops, you must be
              <Link to={"/signin"} className="text-accent ">
                {" "}
                logged in
              </Link>{" "}
              to access this page.
            </p>

            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <Link
                className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-accent text-white hover:bg-accentDarker disabled:opacity-50 disabled:pointer-events-none"
                to="/"
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
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Go back home
              </Link>
            </div>
          </div>
        </main>
        {/* <!-- ========== END MAIN CONTENT ========== --> */}
      </div>
    );
  }

  // returns child route elements
  return <Outlet />;
};
export default ProtectedRoute;

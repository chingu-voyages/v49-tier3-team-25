import axios from "axios";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { setAdminCredentials } from "../../redux/features/adminAuth/adminAuthSlice";
import { useAppDispatch } from "../../redux/hooks";

const AdminSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitSignin = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setPending(true);

    const data = { email, password };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admins/login`,
        data
      );
      localStorage.setItem("adminUser", JSON.stringify(res.data.data));
      dispatch(setAdminCredentials(res.data.data));
      navigate("/admin");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setError(error?.response.data.message);
          setPending(false);
        }
      } else {
        console.error(error);
        setPending(false);
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <div className="flex w-screen py-10">
        <div className="w-full ">
          <img src="/book.jpeg" className="rounded-r-2xl h-[700px]" />
        </div>
        <div className="flex flex-col w-full h-[700px]">
          <form
            className="mx-auto my-auto flex flex-col w-[60%] justify-center gap-8"
            onSubmit={onSubmitSignin}
          >
            <div>
              <h1 className="text-3xl">Login to Dashboard</h1>
              <h3 className="text-md">Enter your details below</h3>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 border-neutral-400 outline-none py-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b-2 border-neutral-400 outline-none py-3"
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <p className="text-red-500 text-sm">
                Email and password combination is wrong, please try again.
              </p>
            )}

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full mt-3 bg-accent hover:bg-accentDarker text-white py-4 rounded-md"
              >
                {pending ? "Logging in..." : "Log In"}
              </button>
              {/* <a href="#" className="text-accent text-lg">
                Forget Password?
              </a> */}
            </div>
            <div className="flex">
              <div>Don't have an account?</div>
              <Link
                to="/admin/signup"
                className="ml-3 font-bold underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminSignin;

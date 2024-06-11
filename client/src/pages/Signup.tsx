import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCredentials } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitSignup = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const data = { fullName: name, email, password };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users/signup`,
        data
      );
      if (res.status === 201) {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        dispatch(setCredentials(res.data.data));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
    }
  };

  return (
    <>
      <div className="flex w-screen">
        <div className="w-full">
          <img src="/book.jpeg" className="rounded-r-2xl h-[700px]" />
        </div>
        <div className="flex flex-col w-full h-[700px]">
          <form
            className="mx-auto my-auto flex flex-col w-[60%] justify-center gap-8"
            onSubmit={onSubmitSignup}
          >
            <div>
              <h1 className="text-3xl">Create an account</h1>
              <h3 className="text-md">Enter your details below</h3>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 border-neutral-400 outline-none py-3"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 border-neutral-400 outline-none py-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex flex-col">
              <input
                type="password"
                placeholder="Password"
                className="border-b-2 border-neutral-400 outline-none py-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="text-xs text-gray-500">
                Password must be at least 8 characters
              </span>
            </div>

            {error && (
              <p className="text-red-500 text-sm">
                Data is invalid, please try again.
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-3 bg-accent hover:bg-accentDarker text-white py-4 rounded-md"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

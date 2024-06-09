import axios from "axios";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { setCredentials } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitSignin = async (e: FormEvent) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data);
    try {
      const res = await axios.post(
        "https://chingu-bookstore.up.railway.app/users/login",
        data
      );
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data.data));

      dispatch(setCredentials(res.data.data));
      navigate("/");
    } catch (err) {
      console.log(err);
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
            onSubmit={onSubmitSignin}
          >
            <div>
              <h1 className="text-3xl">Login to Book Brand</h1>
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
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-2/5 mt-3 bg-accent hover:bg-accentDarker text-white py-4 rounded-md"
              >
                Log In
              </button>
              <a href="#" className="text-accent text-lg">
                Forget Password?
              </a>
            </div>
            <div className="flex">
              <div>Don't have an account?</div>
              <Link
                to="/signup"
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

export default Signin;

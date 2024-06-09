import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCredentials } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";
import { useDispatch } from "react-redux";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitSignup = async (e: FormEvent) => {
    e.preventDefault();
    const data = { fullName: name, email, password };
    console.log(data);
    try {
      const res = await axios.post(
        "https://chingu-bookstore.up.railway.app/users/signup",
        data
      );
      console.log(res);
      if (res.status === 201) {
        localStorage.setItem("user", JSON.stringify(res.data.data));

        dispatch(setCredentials(res.data.data));
        navigate("/");
      }
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
            <input
              type="password"
              placeholder="Password"
              className="border-b-2 border-neutral-400 outline-none py-3"
              onChange={(e) => setPassword(e.target.value)}
            />
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

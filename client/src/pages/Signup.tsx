import { FormEvent, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Signup = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitSignup = async (e: FormEvent) => {
    e.preventDefault();
    const data = { fullName, email, password };
    const signupURL = `${import.meta.env.VITE_SERVER_URL}/signup`;
    const response = await fetch(signupURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const responseData = await response.json();
    console.log(responseData)
    if (response.status !== 201) {
      console.error(responseData.message);
    }
    console.log(responseData);
    console.log("Account created");
  };

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

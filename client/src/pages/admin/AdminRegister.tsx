import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "react-toastify";
import { setAdminCredentials } from "../../redux/features/adminAuth/adminAuthSlice";

export const AdminRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const successToast = (text: string) => toast.success(text);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitSignup = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setPending(true);
    const data = { fullName: name, email, password };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admins/signup`,
        data
      );
      if (res.status === 201) {
        localStorage.setItem("adminUser", JSON.stringify(res.data.data));
        dispatch(setAdminCredentials(res.data.data));
        navigate("/admin/signin");
        successToast("Successully registered! Please sign in.");
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error.response && error?.response.data.message) {
          setError(error?.response.data.message);
          setPending(false);
        } else if (error.response && error?.response.data.error) {
          setError(error?.response.data.error);
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
        <div className="w-full">
          <img src="/book.jpeg" className="rounded-r-2xl h-[700px]" />
        </div>
        <div className="flex flex-col w-full h-[700px]">
          <form
            className="mx-auto my-auto flex flex-col w-[60%] justify-center gap-8"
            onSubmit={onSubmitSignup}
          >
            <div>
              <h1 className="text-3xl">Create an Admin account</h1>
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
              <p className="text-red-500 text-sm">{error}. Please try again.</p>
            )}

            <button
              type="submit"
              className="w-full mt-3 bg-accent hover:bg-accentDarker text-white py-4 rounded-md"
            >
              {pending ? "Creating Account..." : "Create Account"}
            </button>
            <div className="flex">
              <div>Have an account?</div>
              <Link
                to="/admin/signin"
                className="ml-3 font-bold underline underline-offset-4"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

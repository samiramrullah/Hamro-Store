import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  interface SignUpFormInterface {
    full_name: String;
    email: String;
    password: String;
  }
  const [formData, setFormData] = useState<SignUpFormInterface>({ full_name: "", email: "", password: '' })
  const onChageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const onSubmitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_KEY}user/register`,formData)
    .then((res)=>{
      if(res.data.status)
        {
           toast.success(res.data.message,{position:'top-right'})
        }
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message, { position: "top-right" });
    });
  }
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/> */}
          Samir
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an account
            </h1>
            <form onSubmit={onSubmitHandler} className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Full Name" required
                  name="full_name"
                  type="text"
                  onChange={onChageHandler}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Email" required
                  name="email"
                  type="email"
                  onChange={onChageHandler}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="password" required
                  name="password"
                  type="password"
                  onChange={onChageHandler}
                />
              </div>
              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600">Create an account</button>
              <p className="text-sm font-light text-gray-500">
                Already have an account? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </section>
  );
};
export default SignUp;
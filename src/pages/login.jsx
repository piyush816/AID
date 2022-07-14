import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="border shadow-md border-gray-200 rounded-xl px-8 py-12 xl:w-1/4 lg:w-1/3 md:w-1/2 w-full mx-auto">
      <h3 className="text-3xl text-center font-bold mb-12">Welcome Back!</h3>
      <form action="">
        <Input
          name="email"
          type="email"
          placeholder="Enter Email"
          id="emailid"
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter Password"
          id="password"
        />
        <p className="mb-4">
          <Link
            to={"/forgot-password"}
            className="text-primary  hover:underline text-base"
          >
            Forgot Password?
          </Link>
        </p>

        <Button type={"submit"} text="Login" onClick={() => {}} />

        <p className="mt-8 text-center">
          <Link
            to="/register"
            className="text-primary  hover:underline text-base"
          >
            Create an Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default login;

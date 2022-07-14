import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className="border shadow-md border-gray-200 rounded-xl px-8 py-12  xl:w-1/4 lg:w-1/3 md:w-1/2 w-full mx-auto">
      <h3 className="text-3xl text-center font-bold mb-12">
        Create an Account
      </h3>
      <form action="">
        <Input name="name" type="text" placeholder="Enter Name" id="name" />
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
        <Input
          name="cpassword"
          type="password"
          placeholder="Confirm Password"
          id="cpassword"
        />

        <Button type={"submit"} text="Login" onClick={() => {}} />

        <p className="mt-8 text-center">
          <Link to="/login" className="text-primary  hover:underline text-base">
            I already have an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default register;

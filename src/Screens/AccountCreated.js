import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AccountCreated = () => {
  const navigate = useNavigate();
  const sendOtp = async () => {
    navigate("/averify/" + email);
    const response = await fetch(
      "https://userbackend-yacu.onrender.com/api/email-verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );
  };
  const { email } = useParams();
  return (
    <div className="grid place-items-center h-screen">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
          Account Created
        </h5>

        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
          Congratulations your account has been Successfully created
        </p>
        <Link to={`/averify/${email}`}>
          <button
            onClick={sendOtp}
            type="submit"
            className="w-full  text-black bg-orange-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Verify
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AccountCreated;
